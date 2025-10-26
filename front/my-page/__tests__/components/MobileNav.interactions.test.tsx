import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { MobileNav } from '@/components/MobileNav'
import type { MenuItem } from '@/types/menu'
import React, { useState } from 'react'

const Target = ({ label }: { label: string }) => <main>{label}</main>

const items: MenuItem[] = [
  {
    kind: 'group',
    id: 'info',
    title: 'Information',
    sections: [
      { id: 'about', path: '/about', title: 'About Me', body: Target },
      { id: 'contacts', path: '/contacts', title: 'Contacts', body: Target },
    ],
  },
]

// Harness with real state so onToggle works
function MobileNavHarness({ onNavigate }: { onNavigate?: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <MobileNav
      items={items}
      openIndex={openIndex}
      onToggle={(i) => setOpenIndex((p) => (p === i ? null : i))}
      onNavigate={onNavigate}
    />
  )
}

function RoutesWrapper() {
  return (
    <Routes>
      <Route path="/" element={<div>Root</div>} />
      <Route path="/about" element={<Target label="About page" />} />
      <Route path="/contacts" element={<Target label="Contacts page" />} />
    </Routes>
  )
}

it('expands a group and navigates via link, calling onNavigate', async () => {
  const user = userEvent.setup()
  const onNavigate = vi.fn()

  render(
    <MemoryRouter initialEntries={['/']}>
      <MobileNavHarness onNavigate={onNavigate} />
      <RoutesWrapper />
    </MemoryRouter>
  )

  // expand the group (now state will update)
  await user.click(screen.getByRole('button', { name: /information/i }))

  // click the submenu link
  await user.click(screen.getByRole('link', { name: /about me/i }))

  // navigation happened + drawer requested to close
  expect(await screen.findByText('About page')).toBeInTheDocument()
  expect(onNavigate).toHaveBeenCalled()
})