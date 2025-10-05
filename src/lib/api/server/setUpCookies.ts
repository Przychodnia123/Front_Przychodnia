import 'server-only'

import { cookies } from 'next/headers'

import { extractCookieValue } from '@/lib/utils/extractCookieValue'
import { UnauthorizedError } from '@/lib/errors/UnauthorizedError'

function setCookieValue(
  cookieStore: Awaited<ReturnType<typeof cookies>>,
  name: string,
  value: string,
  maxAge: number
) {
  cookieStore.set(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge,
  })
}

export async function setUpCookies(
  setCookieHeaderValue?: string | null,
  onlyAccessToken?: boolean,
  cookieStore?: Awaited<ReturnType<typeof cookies>>
) {
  if (!cookieStore) {
    cookieStore = await cookies()
  }

  if (!setCookieHeaderValue) {
    throw new UnauthorizedError('Missing cookie from backend')
  }

  const accessToken = extractCookieValue(
    'access_token_cookie',
    setCookieHeaderValue
  )
  if (!accessToken) {
    throw new UnauthorizedError('Missing access token in Set-Cookie')
  }
  setCookieValue(cookieStore, 'access_token_cookie', accessToken, 60 * 15)

  if (!onlyAccessToken) {
    const refreshToken = extractCookieValue(
      'refresh_token_cookie',
      setCookieHeaderValue
    )

    if (!refreshToken) {
      throw new UnauthorizedError('Missing tokens in Set-Cookie')
    }

    setCookieValue(
      cookieStore,
      'refresh_token_cookie',
      refreshToken,
      60 * 60 * 24 * 7
    )
  }
}
