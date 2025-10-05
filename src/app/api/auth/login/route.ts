import { NextRequest, NextResponse } from 'next/server'

import { apiClient } from '@/lib/api/server/apiClient'
import { setUpCookies } from '@/lib/api/server/setUpCookies'

export async function POST(req: NextRequest) {
  const body = await req.json()

  const response = await apiClient('login', {
    method: 'POST',
    body,
  })

  if (!response.ok) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const setCookie = response.headers.get('set-cookie')
  try {
    await setUpCookies(setCookie)
  } catch (e) {
    return NextResponse.json({ error: (e as Error).message }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
