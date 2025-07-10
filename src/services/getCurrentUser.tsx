import { User } from '@/types'

export const getCurrentUser = async (): Promise<User> => {
  const res = await fetch('/api/auth/currentUser', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) {
    const { error } = await res.json()
    throw new Error(error || 'Getting user failed')
  }
  const data = await res.json()
  return data
}
