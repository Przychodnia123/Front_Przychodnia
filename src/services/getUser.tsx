import { User } from '@customtypes/index'
import { apiClient } from '@services/apiClient'

export const getUser = async (token: string) => {
  return apiClient<User | null>('/user_info', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
