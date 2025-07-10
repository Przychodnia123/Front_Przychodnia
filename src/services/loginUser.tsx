import { AuthResponse } from '@/types'

export const loginUser = async (
  password: string,
  value: string
): Promise<AuthResponse> => {
  const res = await fetch('/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password, value }),
  })

  if (!res.ok) {
    const { error } = await res.json()
    throw new Error(error || 'Login failed')
  }

  return res.json()
}
