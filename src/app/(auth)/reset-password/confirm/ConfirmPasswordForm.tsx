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

import { confirmPasswordValidationSchema } from '../resetPasswordValidation'

type ConfirmPasswordFormValues = z.infer<typeof confirmPasswordValidationSchema>

export const ConfirmPasswordForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ConfirmPasswordFormValues>({
    resolver: zodResolver(confirmPasswordValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const {
    confirmResetMutation: { mutateAsync: confirmPasswordRequest, isPending },
  } = useResetPassword()

  const confirmPassword = useCallback(
    async (password: string) => {
      await confirmPasswordRequest({ password })
      router.push(routes.signIn)
    },
    [confirmPasswordRequest, router]
  )

  const onSubmit: SubmitHandler<ConfirmPasswordFormValues> = useCallback(
    async ({ password }: ConfirmPasswordFormValues) => {
      try {
        await toast.promise(
          () => confirmPassword(password),
          {
            loading: 'Resetowanie hasła...',
            success: 'Hasło zostało zresetowane. Możesz się zalogować',
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
    [confirmPassword]
  )

  return (
    <form
      name='confirmPasswordForm'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full w-full flex-col space-y-5 py-5 tablet:h-auto'
    >
      <div>
        <Label htmlFor='password' className='text-dark-blue'>
          Nowe hasło
        </Label>
        <Input
          {...register('password')}
          type='password'
          placeholder='**********'
          id='password'
          error={errors.password}
          disabled={isPending}
        />
      </div>
      <div className='pb-5'>
        <Label htmlFor='confirmPassword' className='text-dark-blue'>
          Powtórz nowe hasło
        </Label>
        <Input
          {...register('confirmPassword')}
          type='password'
          placeholder='**********'
          id='confirmPassword'
          error={errors.confirmPassword}
          disabled={isPending}
        />
      </div>
      <Button
        textColor='white'
        bg='dark-blue'
        text='Zmień hasło'
        type='submit'
        disabled={isPending}
      />
    </form>
  )
}
