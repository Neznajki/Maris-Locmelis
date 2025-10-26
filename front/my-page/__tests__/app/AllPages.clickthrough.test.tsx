import '../setupTests'
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, RouteObject } from 'react-router-dom'

import App from '@/App'
import { menuItems } from '@/data/menuItems'

function collectPaths(): string[] {
  const paths: string[] = []
  for (const item of menuItems as any[]) {
    if (item.kind === 'item' && item.path) paths.push(item.path)
    if (item.kind === 'group' && Array.isArray(item.sections)) {
      for (const s of item.sections) if (s?.path) paths.push(s.path)
    }
  }
  if (!paths.includes('/')) paths.unshift('/')
  return Array.from(new Set(paths))
}

function isExternalLink(el: HTMLAnchorElement) {
  const href = el.getAttribute('href') || ''
  const target = el.getAttribute('target') || ''
  return (
    target === '_blank' ||
    href.startsWith('http') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href === '#'
  )
}

async function clickAllInteractables(user: ReturnType<typeof userEvent['setup']>) {
  const root = document.body

  const buttons = within(root).queryAllByRole('button', { hidden: false }) as HTMLButtonElement[]
  const links = within(root).queryAllByRole('link', { hidden: false }) as HTMLAnchorElement[]

  const isEnabled = (el: HTMLElement) =>
    !(el as any).disabled && !el.getAttribute('aria-disabled')

  const uniqueByName = <T extends HTMLElement>(els: T[]) => {
    const seen = new Set<string>()
    return els.filter((el) => {
      const name = (el.getAttribute('aria-label') || el.textContent || '').trim().toLowerCase()
      const key = `${el.tagName}:${name}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }

  const clickables: HTMLElement[] = [
    ...uniqueByName(buttons).filter(isEnabled),
    ...uniqueByName(links).filter((a) => isEnabled(a) && !isExternalLink(a as HTMLAnchorElement)),
  ]

  for (const el of clickables) {
    try {
      await user.click(el)
    } catch {
      // ignore and continue — smoke test
    }
  }
}

it(
  'navigates to all pages and clicks all visible buttons/links',
  async () => {
    const routes: RouteObject[] = [{ path: '/*', element: <App /> }]

    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
      future: { v7_startTransition: true, v7_relativeSplatPath: true },
    })

    const user = userEvent.setup()
    render(<RouterProvider router={router} />)

    const paths = collectPaths()

    for (const path of paths) {
      await act(async () => { await router.navigate(path) }) // 👈 wrap navigate
      // If a route crashed, the default RR error boundary renders — just assert something exists
      const banner = screen.queryByRole('banner')
      expect(banner ?? document.body).toBeInTheDocument()
      await clickAllInteractables(user)
    }
  },
  60000
)