import { apiClient } from '@/lib/api/client/apiClient'

export const logoutUser = async () => {
  return await apiClient(
    'auth/logout',
    {
      method: 'POST',
    },
    'Wylogowanie nie powiodło się'
  )
}
