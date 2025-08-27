import { apiClient } from '@/lib/api/client/apiClient'
import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  401: 'Nieprawidłowy email lub hasło',
}

export const loginUser = async (
  password: string,
  value: string
): Promise<ApiResponse> => {
  return await apiClient(
    'auth/login',
    {
      method: 'POST',
      body: { password, value } as unknown as BodyInit,
    },
    'Logowanie nie powiodło się',
    statusCodeToErrorMessageMap
  )
}
