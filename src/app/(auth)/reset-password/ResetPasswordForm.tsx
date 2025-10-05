'use client'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { useResetPassword } from '@/lib/hooks/useResetPassword'
import { routes } from '@/lib/consts/routes'
import { Button, Input, Label } from '@/utilities'

import { resetPasswordValidationSchema } from '@/app/(auth)/reset-password/resetPasswordValidation'

type ResetPasswordFormValues = z.infer<typeof resetPasswordValidationSchema>

export const ResetPasswordForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const {
    resetPasswordMutation: { mutateAsync: resetPasswordRequest, isPending },
  } = useResetPassword()

  const resetPassword = useCallback(
    async (email: string) => {
      await resetPasswordRequest({ email })
      router.push(routes.resetPasswordVerifyCode)
    },
    [resetPasswordRequest, router]
  )

  const onSubmit: SubmitHandler<ResetPasswordFormValues> = useCallback(
    async ({ email }: ResetPasswordFormValues) => {
      try {
        await toast.promise(
          () => resetPassword(email),
          {
            loading: 'Generowanie kodu...',
            success: 'Kod weryfikacyjny został wysłany na adres e-mail',
            error: (error) => error.message,
          },
          {
            style: {
              minWidth: '250px',
            },
          }
        )
      } catch {}
    },
    [resetPassword]
  )

  return (
    <form
      name='resetPasswordForm'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full w-full flex-col space-y-5 py-5 tablet:h-auto'
    >
      <div className='mb-5'>
        <Label htmlFor='email' className='text-dark-blue'>
          Adres e-mail
        </Label>
        <Input
          {...register('email')}
          type='email'
          placeholder='example@example.com'
          id='email'
          error={errors.email}
          disabled={isPending}
        />
      </div>
      <Button
        textColor='white'
        bg='dark-blue'
        text='Wyślij kod'
        type='submit'
        disabled={isPending}
      />
    </form>
  )
}
