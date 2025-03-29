import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from '@/utilities/Navigation'

test('Navigation', () => {
  render(<Navigation />)

  const link = screen.getByRole('link', { name: 'Zaloguj się' })

  expect(link).toHaveAttribute('href', '/logowanie')
})
