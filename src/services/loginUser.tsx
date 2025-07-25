import { ApiResponse } from '@/types'

export const loginUser = async (
  password: string,
  value: string
): Promise<ApiResponse> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, value }),
  })

  if (!res.ok) {
    throw new Error(
      res.status === 401
        ? 'Nieprawidłowy email lub hasło'
        : 'Logowanie nie powiodło się'
    )
  }

  return res.json()
}
