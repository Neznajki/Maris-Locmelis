import '@testing-library/jest-dom'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

afterEach(() => cleanup())

const originalWarn = console.warn
console.warn = (...args: unknown[]) => {
  const msg = String(args[0] || '')
  if (
    msg.includes('React Router Future Flag Warning') ||
    msg.includes('v7_startTransition') ||
    msg.includes('v7_relativeSplatPath')
  ) {
    return
  }
  originalWarn(...args)
}

console.error = (...args: unknown[]) => {
  const msg = String(args[0] ?? '')
  if (
    msg.includes('DOMMatrix is not defined') ||
    msg.includes('Not implemented: navigation to another Document')
  ) return
  _error(...args)
}

// Minimal DOMMatrix so pdfjs checks don’t explode
;(globalThis as any).DOMMatrix = (globalThis as any).DOMMatrix || class DOMMatrix {}

// Block external windows + hard navigations
;(window as any).open = () => null
Object.defineProperty(window, 'location', {
  value: {
    ...window.location,
    assign: vi.fn(),
    replace: vi.fn(),
  },
  writable: true,
})

// Swallow a very specific unhandled rejection from assets/CV fetch
globalThis.addEventListener?.('unhandledrejection', (e: PromiseRejectionEvent) => {
  const msg = String((e.reason && (e.reason.message || e.reason)) ?? '')
  if (msg.includes('Invalid URL') && msg.includes('/src/assets/MyCV.pdf')) {
    e.preventDefault()
  }
})

// ---- MOCKS (hoisted) ----

// Mock react-pdf so it never loads pdf.js worker/DOM APIs
vi.mock('react-pdf', () => {
  const React = require('react')
  return {
    Document: ({ children }: any) => React.createElement('div', { 'data-testid': 'pdf-doc' }, children),
    Page: () => React.createElement('div', { 'data-testid': 'pdf-page' }),
    pdfjs: { GlobalWorkerOptions: { workerSrc: '' } },
  }
})

// Mock your wrapper that imports react-pdf
vi.mock('@/components/AutoSizedPdf', () => {
  const React = require('react')
  return { default: () => React.createElement('div', { 'data-testid': 'auto-sized-pdf' }) }
})

// Mock GetServerFileTime to avoid HEAD fetch to /src/assets/MyCV.pdf
vi.mock('@/components/GetServerFileTime', () => {
  const React = require('react')
  return { default: () => React.createElement('span', { 'data-testid': 'filetime' }) }
})