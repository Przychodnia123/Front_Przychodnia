import { ApiError } from '../types'

export const apiClient = async <T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, ...customOptions }: RequestInit = {}
): Promise<T> => {
  let responseData: T | null
  let res: Response

  try {
    res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : undefined,
      ...customOptions,
    })

    responseData = await res.json()
  } catch (error) {
    throw new Error(
      `Error parsing response from ${endpoint}: ${error instanceof Error ? error.message : 'Unknown error'}`
    )
  }

  if (!res.ok) {
    const errorData = responseData as ApiError
    throw new Error(
      `Error fetching ${endpoint}: ${errorData?.msg || res.statusText}`
    )
  }

  return responseData as T
}
