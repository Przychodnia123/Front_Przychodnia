import { RegisterData, RegisterResponse } from '@/types/index'
import { apiClient } from '@/services/apiClient'

export const register = (data: RegisterData): Promise<RegisterResponse> => {
  return apiClient<RegisterResponse>('/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
