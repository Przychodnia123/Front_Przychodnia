import { z } from 'zod'

export const resetPasswordValidationSchema = z.object({
  email: z.string().email('Nieprawidłowy adres e-mail'),
})

export const verifyCodeValidationSchema = z.object({
  code: z
    .string()
    .refine((val) => val.length === 6, 'Kod musi mieć 6 znaków')
    .refine((val) => /^\d+$/.test(val), 'Kod musi składać się tylko z cyfr'),
})

export const confirmPasswordValidationSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Hasło musi mieć co najmniej 8 znaków')
      .refine(
        (val) => /[A-Z]/.test(val),
        'Hasło musi zawierać co najmniej jedną wielką literę'
      )
      .refine(
        (val) => /[0-9]/.test(val),
        'Hasło musi zawierać co najmniej jedną cyfrę'
      )
      .refine(
        (val) => /[!@#$%^&*]/.test(val),
        'Hasło musi zawierać co najmniej jeden znak specjalny'
      ),
    confirmPassword: z.string().min(8, 'Hasło musi mieć co najmniej 8 znaków'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: z.ZodIssueCode.custom,
        message: 'Hasła nie są identyczne',
      })
    }
  })
