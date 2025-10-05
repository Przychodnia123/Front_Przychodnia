import { apiClient } from '@/lib/api/client/apiClient'
import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  400: 'Nieprawidłowy kod weryfikacyjny',
  404: 'Sprawdź czy Twój adres email jest prawidłowy',
}

export const confirmReset = async (
  email: string,
  code: string,
  password: string
): Promise<ApiResponse> => {
  return await apiClient(
    'auth/confirmReset',
    {
      method: 'POST',
      body: { email, code, password } as unknown as BodyInit,
    },
    'Nie udało się zresetować hasła',
    statusCodeToErrorMessageMap
  )
}
