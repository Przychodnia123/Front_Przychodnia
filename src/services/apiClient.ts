import { ApiError } from '../types'

export const apiClient = async <T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, ...customOptions }: RequestInit = {}
): Promise<T> => {
  const res = await fetch(`${process.env.BASE_API_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    ...customOptions,
  })

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
