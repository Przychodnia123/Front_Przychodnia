import { User } from '@/types/index'
import { apiClient } from '@/services/apiClient'

export const getUser = (token: string) =>
  apiClient<User | null>('/user_info', { token })
