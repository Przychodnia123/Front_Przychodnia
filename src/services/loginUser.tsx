import { apiClient } from '@/lib/api/client/apiClient'
import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  401: 'Nieprawidłowy email lub hasło',
}

export const loginUser = async (
  password: string,
  value: string,
  rememberMe?: boolean
): Promise<ApiResponse> => {
  const body = {
    password,
    value,
    ...(rememberMe !== undefined && { rememberMe }),
  }

  return await apiClient(
    'auth/login',
    {
      method: 'POST',
      body: JSON.stringify(body),
    },
    'Logowanie nie powiodło się',
    statusCodeToErrorMessageMap
  )
}
