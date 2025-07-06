import { RegisterData, AuthResponse } from '@/types/index'
import { apiClient } from '@/services/apiClient'

export const registerUser = (data: RegisterData): Promise<AuthResponse> => {
  return apiClient<AuthResponse>('/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
