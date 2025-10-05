import { apiClient } from '@/lib/api/client/apiClient'
import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  400: 'Adres email jest wymagany',
  404: 'Sprawdź czy Twój adres email jest prawidłowy',
}

export const resetPasswordRequest = async (
  email: string
): Promise<ApiResponse> => {
  return await apiClient(
    'auth/resetPasswordRequest',
    {
      method: 'POST',
      body: { email } as unknown as BodyInit,
    },
    'Nie udało się wysłać kodu resetującego hasło',
    statusCodeToErrorMessageMap
  )
}
