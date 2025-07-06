import { z } from 'zod'

export const SignUpValidationSchema = z
  .object({
    username: z
      .string()
      .min(5, 'Nazwa użytkownika musi mieć co najmniej 5 znaków')
      .max(20, 'Nazwa użytkownika musi mieć co najwyżej 20 znaków')
      .trim(),
    first_name: z.string().min(2, 'Imię musi mieć co najmniej 2 znaki').trim(),
    last_name: z
      .string()
      .min(2, 'Nazwisko musi mieć co najmniej 2 znaki')
      .trim(),
    email: z.string().email('Nieprawidłowy adres e-mail').trim(),
    password: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków').trim(),
    password2: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: 'Akceptacja regulaminu jest wymagana',
    }),
  })
  .refine((values) => values.password === values.password2, {
    message: 'Hasła nie pasują.',
    path: ['password2'],
  })
