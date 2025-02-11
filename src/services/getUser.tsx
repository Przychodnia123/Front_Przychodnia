import { User } from '../types'
import { apiClient } from './apiClient'

export const getUser = async (token: string) => {
  return apiClient<User | null>('/user_info', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
