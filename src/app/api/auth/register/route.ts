import { apiClient } from '@/lib/api/server/apiClient'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()

  return apiClient('register', {
    method: 'POST',
    body,
  })
}
