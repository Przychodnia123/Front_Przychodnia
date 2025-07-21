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
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    throw new Error(
      statusCodeToErrorMessageMap[
        res.status as keyof typeof statusCodeToErrorMessageMap
      ] || 'Coś poszło nie tak. Spróbuj ponownie później'
    )
  }

  return res.json()
}
