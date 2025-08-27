import { apiClient } from '@/lib/api/client/apiClient'
import { RegisterData, ApiResponse } from '@/types/index'

const statusCodeToErrorMessageMap = {
  400: 'Wszystkie pola są wymagane',
  409: 'Użytkownik o podanym adresie email lub nazwie użytkownika już istnieje',
  422: 'Wprowadzono nieprawidłowe dane',
  500: 'Coś poszło nie tak. Spróbuj ponownie później',
}

export const registerUser = async (
  data: RegisterData
): Promise<ApiResponse> => {
  return await apiClient(
    'auth/register',
    {
      method: 'POST',
      body: data as unknown as BodyInit,
    },
    'Coś poszło nie tak. Spróbuj ponownie później',
    statusCodeToErrorMessageMap
  )
}
