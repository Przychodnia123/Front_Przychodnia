import { expect, it, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Navigation } from '@/utilities/Navigation'

describe('Navigation', () => {
  beforeEach(() => {
    render(<Navigation />)
  })

  it("should render link with name 'Zaloguj się' directing to login page", () => {
    const link = screen.getByRole('link', { name: 'Zaloguj się' })
    expect(link).toHaveAttribute('href', '/logowanie')
  })

  it('should render logo with a link directing to home', () => {
    const logo = screen.getByAltText(/logo/i)
    const logoLink = logo.closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('should open mobile menu when hamburger is clicked', async () => {
    const hamburgerButton = screen.getByTestId('hamburger-button')
    await hamburgerButton.click()

    const mobileMenu = screen.getByTestId('mobile-menu')
    expect(mobileMenu).toBeVisible()
  })
})
