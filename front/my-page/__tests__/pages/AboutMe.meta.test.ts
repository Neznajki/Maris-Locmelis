import '@testing-library/jest-dom'
// Adjust this import if your meta lives elsewhere (e.g., '@/pages/AboutMePage.meta')
import { AboutMeTitle as title } from '@/pages/meta/AboutMe.meta'

it('has a stable About Me page title', () => {
  expect(typeof title).toBe('string')
  expect(title).toMatch(/about/i)
})
