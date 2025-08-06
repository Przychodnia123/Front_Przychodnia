import { fetchWithAuthRetry } from '@/lib/api/fetchWithAuthRetry'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const user = await fetchWithAuthRetry('user_info')
    return NextResponse.json(user)
  } catch (error) {
    if (error instanceof Error && error.message === 'Session expired') {
      return NextResponse.json({ error: 'Session expired' }, { status: 401 })
    }
    return NextResponse.json({ error: 'Something went wrong' }, { status: 400 })
  }
}
