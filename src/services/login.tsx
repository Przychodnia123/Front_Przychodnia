import { LoginData, LoginResponse } from '../types'
import { apiClient } from './apiClient'

export const login = (data: LoginData): Promise<LoginResponse> => {
  return apiClient<LoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
