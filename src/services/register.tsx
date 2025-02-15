import { RegisterData, RegisterResponse } from '../types'
import { apiClient } from './apiClient'

export const register = async (
  data: RegisterData
): Promise<RegisterResponse> => {
  return apiClient<RegisterResponse>('/register', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}
