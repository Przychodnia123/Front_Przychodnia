import { apiClient } from '@/lib/api/server/apiClient'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()

  return apiClient('verify-code', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
