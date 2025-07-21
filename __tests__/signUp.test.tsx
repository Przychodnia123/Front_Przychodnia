import { expect, it, describe, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import SignUp from '@/app/(auth)/sign-up/page'

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}))

vi.mock('@tanstack/react-query', () => ({
  useMutation: vi.fn().mockReturnValue({
    mutateAsync: vi.fn(),
  }),
}))

describe('SignUp', () => {
  beforeEach(() => {
    render(<SignUp />)
  })

  it('should render sign up form with appropriate fields', () => {
    const form = screen.getByRole('form')
    expect(form).toBeInTheDocument()

    const expectedFors = ['username', 'email', 'password', 'password2', 'terms']

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
    const hasAccountText = screen.getByText(/Masz już konto?/i)
    expect(hasAccountText).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Zaloguj się' })
    expect(link).toHaveAttribute('href', '/logowanie')
  })
})
