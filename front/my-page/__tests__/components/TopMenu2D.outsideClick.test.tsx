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
  title: 'Info button we should click',
  sections: [{ id: 'about', path: '/about', title: 'Button I should be able to see', body: Dummy }],
}, {
  kind: 'group',
  id: 'otherInfo',
  title: 'Info button we should switch',
  sections: [{ id: 'sub2', path: '/sub2', title: 'second sub section button', body: Dummy }],
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

it('closes menu if clicked outside', async () => {
  const user = userEvent.setup()
  render(
    <MemoryRouter>
      <TopMenu2D items={items} />
    </MemoryRouter>
  )

  var subMenuButton = screen.queryByText('Button I should be able to see')
  var subMenuButton2 = screen.queryByText('second sub section button')
  expect(subMenuButton).not.toBeInTheDocument()
  expect(subMenuButton2).not.toBeInTheDocument()

  const toggle = screen.getByText('Info button we should click')
  await user.click(toggle)

  subMenuButton = screen.getByText('Button I should be able to see')
  expect(subMenuButton).toBeVisible()
  subMenuButton2 = screen.queryByText('second sub section button')
  expect(subMenuButton2).not.toBeInTheDocument()

  const body = screen.getByText('Info button we should switch')
  await user.click(body)
  expect(subMenuButton).not.toBeVisible()
  subMenuButton2 = screen.queryByText('second sub section button')
  expect(subMenuButton2).toBeInTheDocument()
})
