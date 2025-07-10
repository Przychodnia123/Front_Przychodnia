import { cookies } from 'next/headers'
import { extractCookieValue } from '../utils/extractCookieValue'

async function fetchRefreshToken(cookieHeader: string) {
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/refresh_token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: cookieHeader,
    },
  })
}

export const fetchWithAuthRetry = async <T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const cookieStore = await cookies()

  let initialResponse = await fetch(url, {
    ...options,
    credentials: 'include',
    headers: {
      ...options.headers,
      Cookie: cookieStore.toString(),
    },
  })

  if (initialResponse.status === 401) {
    console.log('Need to refresh token')
    const refreshResponse = await fetchRefreshToken(cookieStore.toString())

    const newSetCookie = refreshResponse.headers.get('set-cookie')

    if (!refreshResponse.ok || !newSetCookie) {
      throw new Error('Session expired')
    }

    const newAccessToken = extractCookieValue(
      'access_token_cookie',
      newSetCookie
    )

    if (!newAccessToken) {
      throw new Error('Session expired')
    }

    cookieStore.set('access_token_cookie', newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })

    initialResponse = await fetch(url, {
      ...options,
      credentials: 'include',
      headers: {
        ...options.headers,
        Cookie: cookieStore.toString(),
      },
    })
  }

  if (!initialResponse.ok) {
    throw new Error('Something went wrong')
  }

  return initialResponse.json() as T
}
