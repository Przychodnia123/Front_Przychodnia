import 'server-only'

export async function apiClient(
  endpoint: string,
  {
    method = 'GET',
    body,
    headers = {},
    ...customOptions
  }: RequestInit & { token?: string } = {}
): Promise<Response> {
  return fetch(`${process.env.NEXT_PUBLIC_EXTERNAL_API_URL}/${endpoint}`, {
    method,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body,
    ...customOptions,
  })
}
