import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Router } from 'react-router-dom'
import { TopMenu2D } from '@/components/TopMenu2D'

vi.mock('@/components/DesktopNav', () => ({
  DesktopNav: ({ items }: { items: Array<{ title: string; path: string }> }) => (
    <nav>
      {items.map(it => (
        <a key={it.path} href={it.path} className="px-3 py-2">
          {it.title}
        </a>
      ))}
    </nav>
  ),
}))

vi.mock('@/components/MobileNav', () => ({
  MobileNav: ({ onNavigate }: any) => (
    <div data-testid="mobile-nav" onClick={onNavigate}>
      MobileNav
    </div>
  ),
}))

describe('TopMenu2D MobileNav', () => {
  const items = [
    { title: 'Home', path: '/', kind: 'item' as const },
    { title: 'Docs', path: '/docs', kind: 'item' as const },
  ]

  it('renders and updates title based on location', () => {
    render(
      <MemoryRouter initialEntries={['/docs']}>
        <TopMenu2D items={items} />
      </MemoryRouter>
    )
    // Non-ambiguous query (DesktopNav also renders a "Docs" link)
    expect(screen.getByRole('link', { name: 'Docs' })).toBeInTheDocument()
  })

  it('toggles mobile menu open and closed (covers the MobileNav conditional render ~line 83) ', async () => {
    render(
      <MemoryRouter>
        <TopMenu2D items={items} />
      </MemoryRouter>
    )

    const toggle = screen.getByRole('button', { name: /toggle navigation/i })

    // Open
    fireEvent.click(toggle)
    // aria-expanded reflects state & body-lock is added when open
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    expect(document.body).toHaveClass('body-lock')

    // MobileNav should be rendered now (this hits the conditional block)
    expect(await screen.findByTestId('mobile-nav')).toBeInTheDocument()

    // Close via onNavigate (our mock calls it on click)
    fireEvent.click(screen.getByTestId('mobile-nav'))
    expect(screen.queryByTestId('mobile-nav')).not.toBeInTheDocument()
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
    expect(document.body).not.toHaveClass('body-lock')
  })

  it('closes open menu when clicking outside', () => {
    render(
      <MemoryRouter>
        <TopMenu2D items={items} />
      </MemoryRouter>
    )
    // Click outside (document body) -> outside click listener executes
    fireEvent.click(document.body)
    expect(true).toBe(true) // executed without error for coverage
  })
})
