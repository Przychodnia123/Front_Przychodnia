import { expect, it, describe, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import SignIn from '@/app/(auth)/sign-in/page'

describe('SignIn', () => {
  beforeEach(() => {
    render(<SignIn />)
  })

  it('should render sign in form with appropriate fields', () => {
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const expectedFors = ['email', 'password']

    expectedFors.forEach((forAttr) => {
      const label = screen.getByLabelText((_, element) => {
        return (
          element?.tagName.toLowerCase() === 'input' && element.id === forAttr
        )
      })

      expect(label).toBeInTheDocument()
    })
  })

  it('should render link to sign up page', () => {
    const noAccountText = screen.getByText(/Nie masz konta?/i)
    expect(noAccountText).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Zarejestruj się' })
    expect(link).toHaveAttribute('href', '/rejestracja')
  })
})
