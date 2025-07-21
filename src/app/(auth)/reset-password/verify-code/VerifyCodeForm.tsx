'use client'
import { useCallback } from 'react'
import { useRouter } from 'next/navigation'

import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'

import { useResetPassword } from '@/lib/hooks/userResetPassword'
import { routes } from '@/lib/consts/routes'
import { Button, Input, Label, Spinner } from '@/utilities'

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
    verifyCodeMutation: { mutateAsync: verifyCodeRequest, isPending, error },
  } = useResetPassword()

  const onSubmit: SubmitHandler<VerifyCodeFormValues> = useCallback(
    async ({ code }: VerifyCodeFormValues) => {
      try {
        await verifyCodeRequest({ code })
        router.push(routes.resetPasswordConfirm)
      } catch {}
    },
    [router, verifyCodeRequest]
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
      {isPending && <Spinner />}
      {error && !isPending && (
        <div className='text-center text-alert'>{error.message}</div>
      )}
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
