import { ApiResponse } from '@/types'

const statusCodeToErrorMessageMap = {
  400: 'Nieprawidłowy kod weryfikacyjny',
  404: 'Nieprawidłowy kod weryfikacyjny',
}

export const verifyCode = async (
  email: string,
  code: string
): Promise<ApiResponse> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/verify-code`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, code }),
    }
  )

  if (!res.ok) {
    throw new Error(
      statusCodeToErrorMessageMap[
        res.status as keyof typeof statusCodeToErrorMessageMap
      ] || 'Nie udało się zweryfikować kodu'
    )
  }

  return res.json()
}
