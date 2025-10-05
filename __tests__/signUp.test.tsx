import { expect, it, describe, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import SignUp from '@/app/(auth)/sign-up/page'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

let mockRegisterUser: ReturnType<typeof vi.fn>
let mockToastPromise: ReturnType<typeof vi.fn>

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
}))

vi.mock('@/services/registerUser', () => ({
  registerUser: (...args: unknown[]) => mockRegisterUser(...args),
}))

vi.mock('react-hot-toast', () => ({
  __esModule: true,
  default: { promise: (...args: unknown[]) => mockToastPromise(...args) },
}))

const queryClient = new QueryClient()

vi.mock('@tanstack/react-query', async () => {
  const actual = await vi.importActual<typeof import('@tanstack/react-query')>(
    '@tanstack/react-query'
  )
  return {
    ...actual,
    useMutation: () => ({
      mutateAsync: (...args: unknown[]) => mockRegisterUser(...args),
      isLoading: false,
    }),
  }
})

describe('SignUp', () => {
  beforeEach(() => {
    mockRegisterUser = vi.fn()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    mockToastPromise = vi.fn((promise, messages, options) => promise())
    render(
      <QueryClientProvider client={queryClient}>
        <SignUp />
      </QueryClientProvider>
    )
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

  it('calls registerUser and redirects on successful registration', async () => {
    const usernameInput = screen.getByLabelText(
      (_, el) => el?.id === 'username'
    )
    const firstNameInput = screen.getByLabelText(
      (_, el) => el?.id === 'first_name'
    )
    const lastNameInput = screen.getByLabelText(
      (_, el) => el?.id === 'last_name'
    )
    const emailInput = screen.getByLabelText((_, el) => el?.id === 'email')
    const passwordInput = screen.getByLabelText(
      (_, el) => el?.id === 'password'
    )
    const password2Input = screen.getByLabelText(
      (_, el) => el?.id === 'password2'
    )
    const termsInput = screen.getByLabelText((_, el) => el?.id === 'terms')
    const button = screen.getByRole('button', { name: /zarejestruj się/i })

    mockRegisterUser.mockResolvedValueOnce({})

    fireEvent.input(usernameInput, { target: { value: 'testuser' } })
    fireEvent.input(firstNameInput, { target: { value: 'Test' } })
    fireEvent.input(lastNameInput, { target: { value: 'User' } })
    fireEvent.input(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.input(passwordInput, { target: { value: 'password123' } })
    fireEvent.input(password2Input, { target: { value: 'password123' } })
    fireEvent.click(termsInput)
    fireEvent.click(button)

    await waitFor(() => {
      expect(mockRegisterUser).toHaveBeenCalledWith({
        email: 'test@example.com',
        first_name: 'Test',
        last_name: 'User',
        password: 'password123',
        username: 'testuser',
      })
      expect(mockToastPromise).toHaveBeenCalled()
    })
  })

  it('does not register user and shows error toast on registration error', async () => {
    const usernameInput = screen.getByLabelText(
      (_, el) => el?.id === 'username'
    )
    const firstNameInput = screen.getByLabelText(
      (_, el) => el?.id === 'first_name'
    )
    const lastNameInput = screen.getByLabelText(
      (_, el) => el?.id === 'last_name'
    )
    const emailInput = screen.getByLabelText((_, el) => el?.id === 'email')
    const passwordInput = screen.getByLabelText(
      (_, el) => el?.id === 'password'
    )
    const password2Input = screen.getByLabelText(
      (_, el) => el?.id === 'password2'
    )
    const termsInput = screen.getByLabelText((_, el) => el?.id === 'terms')
    const button = screen.getByRole('button', { name: /zarejestruj się/i })

    mockRegisterUser.mockRejectedValueOnce({ message: 'Błąd rejestracji' })

    fireEvent.input(usernameInput, { target: { value: 'testuser' } })
    fireEvent.input(firstNameInput, { target: { value: 'Test' } })
    fireEvent.input(lastNameInput, { target: { value: 'User' } })
    fireEvent.input(emailInput, { target: { value: 'test@example.com' } })
    fireEvent.input(passwordInput, { target: { value: 'password123' } })
    fireEvent.input(password2Input, { target: { value: 'password123' } })
    fireEvent.click(termsInput)
    fireEvent.click(button)

    await waitFor(() => {
      expect(mockToastPromise).toHaveBeenCalled()
      const [, messages] = mockToastPromise.mock.calls[0]
      const errorMessage = messages.error({ message: 'Błąd rejestracji' })
      expect(errorMessage).toBe('Błąd rejestracji')
    })
  })
})
