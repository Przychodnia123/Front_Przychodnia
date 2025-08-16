import { apiClient } from '@/lib/api/server/apiClient'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  const data = await req.json()

  return apiClient('request-reset', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
