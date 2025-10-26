import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { TopMenu2D } from '@/components/TopMenu2D'
import type { MenuItem } from '@/types/menu'

const Dummy = () => <main>Dummy</main>

const items: MenuItem[] = [
  { kind: 'item', id: 'home', path: '/', title: 'Home', body: Dummy },
  {
    kind: 'group',
    id: 'info',
    title: 'Information',
    sections: [
      { id: 'about', path: '/about', title: 'About Me', body: Dummy },
    ],
  },
]

function App({ initial }: { initial: string }) {
  return (
    <MemoryRouter initialEntries={[initial]}>
      <TopMenu2D items={items} />
      <Routes>
        <Route path="/" element={<Dummy/>} />
        <Route path="/about" element={<Dummy/>} />
      </Routes>
    </MemoryRouter>
  )
}

it('renders current page title from menu items', () => {
  render(<App initial="/about" />)
  expect(screen.getByText('About Me')).toBeInTheDocument()
})
