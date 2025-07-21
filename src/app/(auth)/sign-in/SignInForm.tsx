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
import { useLogin } from '@/lib/hooks/useLogin'

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

  const loginMutation = useLogin()

  const router = useRouter()

  const onSubmit: SubmitHandler<SignInFormValues> = async (data) => {
    try {
      //TODO: set loading state
      await loginMutation.mutateAsync({
        password: data.password,
        value: data.email,
      })

      router.push(routes.userProfile)
    } catch (error) {
      console.error(error)
    }
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
        {/* TODO: use Checkbox component */}

        <label>
          <input type='checkbox' />
          <span className='ml-2'>Zapamiętaj hasło</span>
        </label>
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
