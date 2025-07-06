import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

async function fetchUser(token: string) {
  await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/user_info`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}

export async function GET() {
  const cookieStore = await cookies()

  let access_token = cookieStore.get('access_token')?.value
  if (!access_token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  let res = await fetchUser(access_token)

  if (res.status === 401) {
    const refreshRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/refresh_token`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (!refreshRes.ok) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 })
    }

    access_token = cookieStore.get('access_token')?.value
    if (!access_token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    res = await fetchUser(access_token)
  }

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Failed to fetch user' },
      { status: res.status }
    )
  }

  const user = await res.json()
  return NextResponse.json(user)
}
