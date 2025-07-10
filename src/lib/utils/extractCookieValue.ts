export function extractCookieValue(
  name: string,
  setCookie: string
): string | null {
  const match = setCookie.match(new RegExp(`${name}=([^;]+)`))
  return match?.[1] || null
}
