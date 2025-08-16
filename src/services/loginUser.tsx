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
      body: JSON.stringify({ password, value }),
    },
    'Logowanie nie powiodło się',
    statusCodeToErrorMessageMap
  )
}
