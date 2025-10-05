import { expect, it, describe, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import SignIn from '@/app/(auth)/sign-in/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let mockLoginUser: ReturnType<typeof vi.fn>
let mockToastPromise: ReturnType<typeof vi.fn>

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/services/loginUser', () => ({
  loginUser: (...args: unknown[]) => mockLoginUser(...args),
}))

vi.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { promise: (...args: unknown[]) => mockToastPromise(...args) },
}))

const queryClient = new QueryClient()

describe('SignIn', () => {
  beforeEach(() => {
    mockLoginUser = vi.fn()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mockToastPromise = vi.fn((promise, messages, options) => promise())
    vi.clearAllMocks()
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

  it('calls loginUser and redirects on successful login', async () => {
    const emailInput = screen.getByLabelText(/adres e-mail/i)
    const passwordInput = screen.getByLabelText('Hasło')
    const button = screen.getByRole('button', { name: /zaloguj się/i })

    mockLoginUser.mockResolvedValueOnce({})

    fireEvent.input(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.input(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(mockLoginUser).toHaveBeenCalledWith(
        'password123',
        'test@example.com'
      )
      expect(mockToastPromise).toHaveBeenCalled()
    })
  })

  it('shows error toast on login error', async () => {
    const emailInput = screen.getByLabelText(/adres e-mail/i)
    const passwordInput = screen.getByLabelText('Hasło')
    const button = screen.getByRole('button', { name: /zaloguj się/i })

    mockLoginUser.mockRejectedValueOnce({ message: 'Błąd logowania' })

    fireEvent.input(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.input(passwordInput, { target: { value: 'password123' } })
    fireEvent.click(button)

    await waitFor(() => {
      expect(mockLoginUser).toHaveBeenCalledWith(
        'password123',
        'test@example.com'
      )
      expect(mockToastPromise).toHaveBeenCalled()
      const [, messages] = mockToastPromise.mock.calls[0]
      expect(messages.error({ message: 'Błąd logowania' })).toBe(
        'Błąd logowania'
      )
    })
  })
})
