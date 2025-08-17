'use client'
import { Input } from '@/utilities/Input'
import { SignInValidationSchema } from '@/auth/sign-in/signInValidationSchema'
import { Button } from '@/utilities/Button'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Label } from '@/utilities/Label'
import { routes } from '@/lib/consts/routes'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { Checkbox } from '@/utilities'
import { useMutation } from '@tanstack/react-query'
import { loginUser } from '@/services/loginUser'

type SignInFormValues = z.infer<typeof SignInValidationSchema>

export const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(SignInValidationSchema),
    mode: 'onBlur',
  })

  const loginMutation = useMutation({
    mutationFn: ({
      password,
      value,
      rememberMe,
    }: {
      password: string
      value: string
      rememberMe: boolean
    }) => loginUser(password, value, rememberMe),
  })

  const router = useRouter()

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      await toast.promise(
        async () => {
          await loginMutation.mutateAsync({
            password: data.password,
            value: data.email,
            rememberMe: data.rememberMe || false,
          })
          router.push(routes.userProfile)
        },
        { loading: 'Logowanie...', error: (error) => error.message },
        { style: { minWidth: '250px' } }
      )
    } catch {}
  }

  return (
    <form
      name='singInForm'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full w-full flex-col space-y-5 py-10 tablet:h-auto'
    >
      <div>
        <Label htmlFor='email'>Adres e-mail</Label>
        <Input
          type='email'
          placeholder='example@example.com'
          id='email'
          {...register('email')}
          error={errors.email}
        />
      </div>
      <div>
        <Label htmlFor='password'>Hasło</Label>
        <Input
          type='password'
          placeholder='********'
          id='password'
          {...register('password')}
          error={errors.password}
        />
      </div>
      <div className='flex justify-between'>
        <Checkbox
          id='rememberMe'
          label='Zapamiętaj hasło'
          {...register('rememberMe')}
          error={errors.rememberMe}
        />
        <Link className='text-light-blue' href={routes.resetPassword}>
          Nie pamiętasz hasła?
        </Link>
      </div>
      <Button
        textColor='white'
        bg='dark-blue'
        text='Zaloguj się'
        type='submit'
      />
    </form>
  )
}
