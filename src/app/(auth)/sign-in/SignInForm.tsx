'use client'
import { Input } from '@utilities/Input'
import { SignInValidationSchema } from '@auth/sign-in/signInValidationSchema'
import { Button } from '@utilities/Button'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { Label } from '@/src/utilities/Label'
import { routes } from '@/src/lib/consts/routes'

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

  const onSubmit: SubmitHandler<SignInFormValues> = () => {
    // TODO: Handle form submission, e.g., send data to an API
  }

  return (
    <form
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
        <Link className='text-light-blue' href={routes.home}>
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
