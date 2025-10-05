import { apiClient } from '@/lib/api/client/apiClient'
import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  400: 'Nieprawidłowy kod weryfikacyjny',
  404: 'Nieprawidłowy kod weryfikacyjny',
}

export const verifyCode = async (
  email: string,
  code: string
): Promise<ApiResponse> => {
  return await apiClient(
    'auth/verifyCode',
    {
      method: 'POST',
      body: { email, code } as unknown as BodyInit,
    },
    'Nie udało się zweryfikować kodu',
    statusCodeToErrorMessageMap
  )
}
