import { useMutation } from '@tanstack/react-query'

import { resetPasswordRequest } from '@/services/resetPasswordRequest'
import { verifyCode } from '@/services/verifyCode'
import { confirmReset } from '@/services/confirmReset'

import { useResetPasswordContext } from '../context/ResetPasswordContext'

export const useResetPassword = () => {
  const { email, code, setEmail, setCode } = useResetPasswordContext()

  const resetPasswordMutation = useMutation({
    mutationFn: ({ email }: { email: string }) => {
      setEmail(email)
      return resetPasswordRequest(email)
    },
  })

  const verifyCodeMutation = useMutation({
    mutationFn: ({ code }: { code: string }) => {
      if (!email) {
        throw new Error('Weryfikacja kodu nie powiodła się')
      }
      setCode(code)
      return verifyCode(email, code)
    },
  })

  const confirmResetMutation = useMutation({
    mutationFn: ({ password }: { password: string }) => {
      if (!email || !code) {
        throw new Error('Reset hasła nie powiódł się')
      }
      return confirmReset(email, code, password)
    },
  })

  return {
    resetPasswordMutation,
    verifyCodeMutation,
    confirmResetMutation,
  }
}
