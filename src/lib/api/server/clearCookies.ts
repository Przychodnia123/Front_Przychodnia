import 'server-only'

import { cookies } from 'next/headers'

export async function clearCookies() {
  const cookieStore = await cookies()

  cookieStore.delete('access_token_cookie')
  cookieStore.delete('refresh_token_cookie')
}
