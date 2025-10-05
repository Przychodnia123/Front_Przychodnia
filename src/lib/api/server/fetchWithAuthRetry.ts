import 'server-only'

import { cookies } from 'next/headers'

import { ApiError } from '@/types'
import { apiClient } from '@/lib/api/server/apiClient'
import { setUpCookies } from '@/lib/api/server/setUpCookies'
import { UnauthorizedError } from '@/lib/errors/UnauthorizedError'

async function fetchRefreshToken(cookieHeader: string) {
  return await apiClient('refresh_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Cookie: cookieHeader },
  })
}

export const fetchWithAuthRetry = async <T = unknown>(
  path: string,
  options: RequestInit = {}
): Promise<T> => {
  const cookieStore = await cookies()

  let initialResponse = await apiClient(path, {
    ...options,
    headers: { ...options.headers, Cookie: cookieStore.toString() },
  })

  if (initialResponse.status === 401) {
    const refreshResponse = await fetchRefreshToken(cookieStore.toString())
    if (!refreshResponse.ok) {
      throw new UnauthorizedError('Session expired')
    }

    const newSetCookie = refreshResponse.headers.get('set-cookie')

    await setUpCookies(newSetCookie, true, cookieStore)

    initialResponse = await apiClient(path, {
      ...options,
      headers: { ...options.headers, Cookie: cookieStore.toString() },
    })
  }

  const responseData = await initialResponse.json()
  if (!initialResponse.ok) {
    throw new Error((responseData as ApiError).msg)
  }

  return responseData as T
}
