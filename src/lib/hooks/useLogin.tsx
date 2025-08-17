import { useMutation } from '@tanstack/react-query'
import { loginUser } from '@/services/loginUser'

export const useLogin = () => {
  return useMutation({
    mutationFn: ({
      password,
      value,
      rememberMe,
    }: {
      password: string
      value: string
      rememberMe: boolean
    }) => loginUser(password, value, rememberMe),
  })
}
