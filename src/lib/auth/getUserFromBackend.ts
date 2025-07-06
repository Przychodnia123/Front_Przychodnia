import { cookies } from 'next/headers'
import { fetchWithAuthRetry } from '../api/fetchWithAuthRetry'

export async function getUserFromBackend() {
  const cookieStore = await cookies()

  const token = cookieStore.get('token')?.value

  if (!token) return null

  const res = await fetchWithAuthRetry(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/user_info`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        credentials: 'include',
      },
    }
  )

  return res
}
