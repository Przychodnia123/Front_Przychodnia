import { NextRequest } from 'next/server'

import { apiClient } from '@/lib/api/server/apiClient'

export async function POST(req: NextRequest) {
  const body = await req.json()

  return apiClient('confirm-reset', {
    method: 'POST',
    body,
  })
}
