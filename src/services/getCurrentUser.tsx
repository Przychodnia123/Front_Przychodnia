import { User } from '@/types'

export const getCurrentUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/currentUser', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  if (!res.ok) {
    throw new Error(
      res.status === 401
        ? 'Sesja wygasła. Zaloguj się ponownie'
        : 'Nie można pobrać użytkownika',
      { cause: res.status }
    )
  }
  const data = await res.json()
  return data
}
