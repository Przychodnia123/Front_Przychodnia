import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'

import ResetPassword from '@/app/(auth)/reset-password/page'
import VerifyCode from '@/app/(auth)/reset-password/verify-code/page'
import ConfirmResetPassword from '@/app/(auth)/reset-password/confirm/page'

import {
  ResetPasswordProvider,
  ResetPasswordContext,
} from '@/lib/context/ResetPasswordContext'
import { routes } from '@/lib/consts/routes'

import * as resetPasswordRequest from '@/services/resetPasswordRequest'
import * as verifyCode from '@/services/verifyCode'
import * as confirmReset from '@/services/confirmReset'

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}))

const mockUseRouter = vi.mocked(useRouter)

const resetPasswordRequestSpy = vi
  .spyOn(resetPasswordRequest, 'resetPasswordRequest')
  .mockResolvedValue({
    msg: 'Reset password request sent',
  })

const verifyCodeRequestSpy = vi
  .spyOn(verifyCode, 'verifyCode')
  .mockResolvedValue({
    msg: 'Verification code sent',
  })

const confirmResetRequestSpy = vi
  .spyOn(confirmReset, 'confirmReset')
  .mockResolvedValue({
    msg: 'Password reset confirmed',
  })

describe('Reset Password', () => {
  const queryClient = new QueryClient()
  const mockPush = vi.fn()

  beforeEach(() => {
    mockUseRouter.mockReturnValue({
      push: mockPush,
      replace: vi.fn(),
      back: vi.fn(),
      forward: vi.fn(),
      refresh: vi.fn(),
      prefetch: vi.fn(),
    })
  })

  afterEach(() => {
    vi.clearAllMocks()
  })

  it('should properly render reset password page content', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResetPasswordProvider>
          <ResetPassword />
        </ResetPasswordProvider>
      </QueryClientProvider>
    )
    expect(screen.getByText('Zapomniałeś hasła?')).toBeInTheDocument()
    expect(
      screen.getByText('Podaj swój adres e-mail, aby odzyskać hasło')
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Wróć do logowania' })
    expect(link).toHaveAttribute('href', routes.signIn)
  })

  it('should send reset password request and redirect to verify code page', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResetPasswordProvider>
          <ResetPassword />
        </ResetPasswordProvider>
      </QueryClientProvider>
    )
    await userEvent.type(screen.getByLabelText('Adres e-mail'), 'test@test.pl')
    await userEvent.click(screen.getByRole('button', { name: 'Wyślij kod' }))

    expect(resetPasswordRequestSpy).toHaveBeenCalledWith('test@test.pl')
    expect(mockPush).toHaveBeenCalledWith(routes.resetPasswordVerifyCode)
  })

  it('should properly render verify code page content', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResetPasswordProvider>
          <VerifyCode />
        </ResetPasswordProvider>
      </QueryClientProvider>
    )
    expect(screen.getByText('Podaj kod')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Kod weryfikacyjny został wysłany na adres e-mail. Sprawdź swoją pocztę i wprowadź kod'
      )
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()

    const link = screen.getByRole('link', { name: 'Wróć do logowania' })
    expect(link).toHaveAttribute('href', routes.signIn)
  })

  it('should send verify code request  and redirect to confirm reset password page', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResetPasswordContext.Provider
          value={{
            email: 'test@test.pl',
            code: '',
            setEmail: vi.fn(),
            setCode: vi.fn(),
          }}
        >
          <VerifyCode />
        </ResetPasswordContext.Provider>
      </QueryClientProvider>
    )

    await userEvent.type(screen.getByLabelText('Kod weryfikacyjny'), '123456')
    await userEvent.click(screen.getByRole('button', { name: 'Zweryfikuj' }))

    expect(verifyCodeRequestSpy).toHaveBeenCalledWith('test@test.pl', '123456')
    expect(mockPush).toHaveBeenCalledWith(routes.resetPasswordConfirm)
  })

  it('should properly render reset password page content', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResetPasswordProvider>
          <ConfirmResetPassword />
        </ResetPasswordProvider>
      </QueryClientProvider>
    )
    expect(screen.getByText('Utwórz nowe hasło')).toBeInTheDocument()
    expect(
      screen.getByText(
        'Poprzednie hasło zostało zresetowane. Utwórz nowe hasło'
      )
    ).toBeInTheDocument()
    expect(screen.getByRole('form')).toBeInTheDocument()
  })

  it('should send confirm reset password request and redirect to sign in page', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <ResetPasswordContext.Provider
          value={{
            email: 'test@test.pl',
            code: '123456',
            setEmail: vi.fn(),
            setCode: vi.fn(),
          }}
        >
          <ConfirmResetPassword />
        </ResetPasswordContext.Provider>
      </QueryClientProvider>
    )

    await userEvent.type(screen.getByLabelText('Nowe hasło'), 'Qwer1234!')
    await userEvent.type(
      screen.getByLabelText('Powtórz nowe hasło'),
      'Qwer1234!'
    )
    await userEvent.click(screen.getByRole('button', { name: 'Zmień hasło' }))

    expect(confirmResetRequestSpy).toHaveBeenCalledWith(
      'test@test.pl',
      '123456',
      'Qwer1234!'
    )
    expect(mockPush).toHaveBeenCalledWith(routes.signIn)
  })
})
