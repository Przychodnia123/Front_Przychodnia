import { LoginData, LoginResponse } from '../types'
import { apiClient } from './apiClient'

export const login = async (data: LoginData): Promise<LoginResponse> => {
  return apiClient<LoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
