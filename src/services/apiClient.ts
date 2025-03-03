import { ApiError } from '@customtypes/index'

export const apiClient = async <T>(
  endpoint: string,
  {
    method = 'GET',
    body,
    headers = {},
    token,
    ...customOptions
  }: RequestInit & { token?: string } = {}
): Promise<T> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`,
    {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...customOptions,
    }
  )

  let responseData: T | null

  try {
    responseData = await res.json()
  } catch (error) {
    throw new Error(`Error parsing response from ${endpoint}: ${error}`)
  }

  if (!res.ok) {
    const errorData = responseData as ApiError
    throw new Error(`Error fetching ${endpoint}: ${errorData.msg}`)
  }

  return responseData as T
}
