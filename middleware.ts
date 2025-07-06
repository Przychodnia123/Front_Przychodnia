import { routes } from '@/lib/consts/routes'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL(routes.signIn, request.url))
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user_info`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  })

  if (res.status === 401) {
    return NextResponse.redirect(new URL(routes.signIn, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/profile/:path*'],
}
