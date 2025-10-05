import { NextResponse } from 'next/server'

import { fetchWithAuthRetry } from '@/lib/api/server/fetchWithAuthRetry'
import { UnauthorizedError } from '@/lib/errors/UnauthorizedError'

export async function GET() {
  try {
    const user = await fetchWithAuthRetry('user_info')
    return NextResponse.json(user)
  } catch (error) {
    if (error instanceof UnauthorizedError) {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 400 })
  }
}
