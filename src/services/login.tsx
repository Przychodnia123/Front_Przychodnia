import { LoginData, LoginResponse } from '@/types/index'
import { apiClient } from '@/services/apiClient'

export const login = (data: LoginData): Promise<LoginResponse> => {
  return apiClient<LoginResponse>('/login', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
