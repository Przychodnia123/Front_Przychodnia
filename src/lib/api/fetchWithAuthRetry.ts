export const fetchWithAuthRetry = async <T = unknown>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  let res = await fetch(url, options)

  if (res.status === 401) {
    const refresh = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/auth/refreshToken`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }
    )

    if (refresh.ok) {
      res = await fetch(url, options)
    }
  }

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error?.message || 'Błąd żądania')
  }

  return res.json() as T
}
