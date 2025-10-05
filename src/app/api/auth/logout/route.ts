import { NextResponse } from 'next/server'

import { fetchWithAuthRetry } from '@/lib/api/server/fetchWithAuthRetry'
import { clearCookies } from '@/lib/api/server/clearCookies'
import { UnauthorizedError } from '@/lib/errors/UnauthorizedError'

export async function POST() {
  try {
    const response = await fetchWithAuthRetry('logout', {
      method: 'POST',
    })

    await clearCookies()

    return NextResponse.json(response)
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 400 })
  }
}
