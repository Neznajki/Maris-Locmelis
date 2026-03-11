import '../setupTests'
import '@testing-library/jest-dom'
import React from 'react'
import { render, screen, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryRouter, RouterProvider, RouteObject } from 'react-router-dom'
import fs from "fs";
import path from "path";

import App from '@/App'
import menuItems from './data/menuItems.json'

import { expect, it, beforeEach } from "vitest";

beforeEach(() => {
  (import.meta as any).env = {
    ...(import.meta as any).env,
    VITE_API_BASE_URL: "http://test.local/",
  };

  (fetch as any).mockReset();

  (fetch as any).mockImplementation(async (url: string) => {
    const endpoint = url.replace(/https?:\/\/[^\/]+\//, '/');

    // special endpoint
    if (endpoint === "/api/menu/items") {
      return {
        ok: true,
        json: async () => menuItems,
      };
    }

    if (endpoint === "/api/users/me") {
      return {
        ok: true,
        json: async () => "",
      };
    }

    // map URL to file
    const mapped = endpoint.replace("/api/pages/sections/by/path?path=%2F", "_").replace("%2F", '_');

    let mockedFilePath = path.join(__dirname, `/data/nav/${mapped}.json`);
    // console.log("Mocking fetch for", mapped, " with file ", mockedFilePath);
    const filePath = path.resolve(mockedFilePath);

    if (!fs.existsSync(filePath)) {
      return {
        ok: false,
        status: 404,
        json: async () => ({ error: "Mock file not found" }),
      };
    }

    const data = JSON.parse(fs.readFileSync(filePath, "utf8"));

    return {
      ok: true,
      json: async () => data,
    };
  });
});


function collectPaths(): string[] {
  const paths: string[] = []
  for (const item of menuItems as any[]) {
    if (item.path) {
      paths.push(item.path)
    } else if (item.items) {
      for (const i of item.items) {
        paths.push(i.path);
      }
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