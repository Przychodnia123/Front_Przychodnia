import { expect, it, describe, beforeEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import SignIn from '@/app/(auth)/sign-in/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}))

vi.mock('@/services/loginUser', () => ({
  loginUser: vi.fn(),
}))

const queryClient = new QueryClient()

describe('SignIn', () => {
  beforeEach(() => {
    render(
      <QueryClientProvider client={queryClient}>
        <SignIn />
      </QueryClientProvider>
    )
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

  it('should render submit button', () => {
    const button = screen.getByRole('button', { name: /zaloguj się/i })
    expect(button).toBeInTheDocument()
  })

  it('should render link to reset password page', () => {
    const resetLink = screen.getByRole('link', { name: /nie pamiętasz hasła/i })
    expect(resetLink).toHaveAttribute('href', '/reset-hasla')
  })

  it('should render link to sign up page', () => {
    const signUpLink = screen.getByRole('link', { name: /zarejestruj się/i })
    expect(signUpLink).toHaveAttribute('href', '/rejestracja')
  })
})
