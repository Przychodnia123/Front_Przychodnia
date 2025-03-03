import { RegisterData, RegisterResponse } from '@customtypes/index'
import { apiClient } from './apiClient'

export const register = (data: RegisterData): Promise<RegisterResponse> => {
  return apiClient<RegisterResponse>('/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
