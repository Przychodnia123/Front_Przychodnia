import { NextRequest } from 'next/server'

import { apiClient } from '@/lib/api/server/apiClient'

export async function POST(req: NextRequest) {
  const data = await req.json()

  return apiClient('confirm-reset', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
