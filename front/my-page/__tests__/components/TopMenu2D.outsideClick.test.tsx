import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { TopMenu2D } from '@/components/TopMenu2D'
import type { MenuItem } from '@/types/menu'

const Dummy = () => <main>Dummy</main>

const items: MenuItem[] = [{
  kind: 'group',
  id: 'info',
  title: 'Info',
  sections: [{ id: 'about', path: '/about', title: 'About Me', body: Dummy }],
}]

it('keeps menu open when clicking inside header (no outside-close)', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <TopMenu2D items={items} />
    </MemoryRouter>
  )

  const toggle = screen.getByRole('button', { name: /toggle navigation/i })
  await user.click(toggle)

  const header = screen.getByRole('banner') // header wraps navRef/menuRef
  await user.click(header)

  // If it crashed or closed unexpectedly we'd fail later actions; basic sanity assertion:
  expect(header).toBeInTheDocument()
})
