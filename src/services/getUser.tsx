import { User } from '../types'
import { apiClient } from './apiClient'

export const getUser = (token: string) =>
  apiClient<User | null>('/user_info', { token })
