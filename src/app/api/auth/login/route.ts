import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { extractCookieValue } from '@/lib/utils/extractCookieValue'

export async function POST(req: NextRequest) {
  const { value, password } = await req.json()

  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}/login`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value, password }),
    }
  )

  if (!backendRes.ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const setCookie = backendRes.headers.get('set-cookie')

  if (!setCookie) {
    return NextResponse.json(
      { error: 'Missing cookie from backend' },
      { status: 500 }
    )
  }

  const cookieStore = await cookies()

  const accessToken = extractCookieValue('access_token_cookie', setCookie)
  const refreshToken = extractCookieValue('refresh_token_cookie', setCookie)

  if (!accessToken || !refreshToken) {
    return NextResponse.json(
      { error: 'Missing tokens in Set-Cookie' },
      { status: 500 }
    )
  }

  cookieStore.set('access_token_cookie', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 15,
  })

  cookieStore.set('refresh_token_cookie', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })

  return NextResponse.json({ success: true })
}
