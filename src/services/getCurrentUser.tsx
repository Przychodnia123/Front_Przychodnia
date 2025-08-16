import { apiClient } from '@/lib/api/client/apiClient'
import { User } from '@/types'

const statusCodeToErrorMessageMap = {
  401: 'Sesja wygasła. Zaloguj się ponownie',
}

export const getCurrentUser = async (): Promise<User> => {
  return await apiClient(
    'auth/currentUser',
    undefined,
    'Nie można pobrać użytkownika',
    statusCodeToErrorMessageMap
  )
}
