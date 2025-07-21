import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  400: 'Adres email jest wymagany',
  404: 'Sprawdź czy Twój adres email jest prawidłowy',
}

export const resetPasswordRequest = async (
  email: string
): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/request-reset`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
  )

  if (!res.ok) {
    throw new Error(
      statusCodeToErrorMessageMap[
        res.status as keyof typeof statusCodeToErrorMessageMap
      ] || 'Nie udało się wysłać kodu resetującego hasło'
    )
  }

  return res.json()
}
