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
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/confirm-reset`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code, password }),
    }
  )

  if (!res.ok) {
    throw new Error(
      statusCodeToErrorMessageMap[
        res.status as keyof typeof statusCodeToErrorMessageMap
      ] || 'Nie udało się zresetować hasła'
    )
  }

  return res.json()
}
