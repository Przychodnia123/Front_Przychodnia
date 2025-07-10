import { extractCookieValue } from '@/lib/utils/extractCookieValue'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// TODO It's not used rn
export async function POST() {
  const cookieStore = await cookies()

  const refresh_token = cookieStore.get('refresh_token_cookie')?.value

  if (!refresh_token) {
    return NextResponse.json(
      { error: 'Missing refresh token' },
      { status: 401 }
    )
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/refresh_token`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    }
  )

  const newSetCookie = res.headers.get('set-cookie')
  const newToken = extractCookieValue('access_token_cookie', newSetCookie || '')

  if (!newToken) {
    return NextResponse.json({ error: 'Unable to refresh' }, { status: 401 })
  }

  cookieStore.set('access_token_cookie', newToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 15,
  })

  return NextResponse.json({ success: true })
}
