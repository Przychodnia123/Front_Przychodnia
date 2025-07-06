export const logoutUser = async () => {
  const res = await fetch('/api/auth/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })

  if (!res.ok) {
    const { error } = await res.json()
    throw new Error(error || 'Logout failed')
  }
}
