import { z } from 'zod'

export const SignUpValidationSchema = z
    .object({
        username: z
            .string()
            .min(3, 'Nazwa użytkownika musi mieć co najmniej 3 znaki')
            .max(20, 'Nazwa użytkownika musi mieć co najwyżej 20 znaków'),
        email: z.string().email('Nieprawidłowy adres e-mail'),
        password: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków'),
        password2: z.string(),
    })
    .refine((values) => values.password === values.password2, {
        message: 'Hasła nie pasują.',
        path: ['password2'],
    })
