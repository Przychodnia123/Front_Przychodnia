export async function apiClient<T>(
  endpoint: string,
  { method = 'GET', body, headers = {}, ...customOptions }: RequestInit = {},
  defaultErrorMessage: string = 'Coś poszło nie tak. Spróbuj ponownie później',
  statusCodeToErrorMessageMap: Record<number, string> = {}
): Promise<T> {
  const response = await fetch(`/api/${endpoint}`, {
    method,
    headers: {
      ...(body ? { 'Content-Type': 'application/json' } : {}),
      ...headers,
    },
    body,
    ...customOptions,
  })

  if (!response.ok) {
    throw new Error(
      statusCodeToErrorMessageMap[
        response.status as keyof typeof statusCodeToErrorMessageMap
      ] || defaultErrorMessage
    )
  }

  return response.json()
}
