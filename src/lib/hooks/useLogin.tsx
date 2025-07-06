import { useMutation } from '@tanstack/react-query'
import { loginUser } from '@/services/loginUser'

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ password, value }: { password: string; value: string }) =>
      loginUser(password, value),
  })
}
