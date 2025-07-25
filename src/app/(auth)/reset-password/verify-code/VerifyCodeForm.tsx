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

import { verifyCodeValidationSchema } from '../resetPasswordValidation'

type VerifyCodeFormValues = z.infer<typeof verifyCodeValidationSchema>

export const VerifyCodeForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyCodeFormValues>({
    resolver: zodResolver(verifyCodeValidationSchema),
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  })

  const {
    verifyCodeMutation: { mutateAsync: verifyCodeRequest, isPending },
  } = useResetPassword()

  const verifyCode = useCallback(
    async (code: string) => {
      await verifyCodeRequest({ code })
      router.push(routes.resetPasswordConfirm)
    },
    [verifyCodeRequest, router]
  )

  const onSubmit: SubmitHandler<VerifyCodeFormValues> = useCallback(
    async ({ code }: VerifyCodeFormValues) => {
      try {
        await toast.promise(
          () => verifyCode(code),
          {
            loading: 'Weryfikacja kodu...',
            success: 'Kod został zweryfikowany',
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
    [verifyCode]
  )

  return (
    <form
      name='verifyCodeForm'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full w-full flex-col space-y-5 py-5 tablet:h-auto'
    >
      <div className='mb-5'>
        <Label htmlFor='code' className='text-dark-blue'>
          Kod weryfikacyjny
        </Label>
        <Input
          {...register('code')}
          type='password'
          placeholder='******'
          id='code'
          error={errors.code}
          disabled={isPending}
        />
      </div>
      <Button
        textColor='white'
        bg='dark-blue'
        text='Zweryfikuj'
        type='submit'
        disabled={isPending}
      />
    </form>
  )
}
