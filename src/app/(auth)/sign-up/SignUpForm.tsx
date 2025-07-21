'use client'
import { Input } from '@/utilities/Input'
import { SignUpValidationSchema } from '@/auth/sign-up/signUpValidationSchema'
import { Button } from '@/utilities/Button'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@/utilities/Label'
import { Checkbox } from '@/utilities/Checkbox'
import { registerUser } from '@/services/register'
import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { routes } from '@/lib/consts/routes'

type SignUpFormValues = z.infer<typeof SignUpValidationSchema>

export const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(SignUpValidationSchema),
    mode: 'onBlur',
  })
  const router = useRouter()

  // TODO Add toast notification for successful registration
  const { mutateAsync: registerUserMutation } = useMutation({
    mutationFn: registerUser,
  })

  const onSubmit: SubmitHandler<SignUpFormValues> = async (data) => {
    try {
      await registerUserMutation({
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
        password: data.password,
        username: data.username,
      })

      router.push(routes.signIn)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      name='singUpForm'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='flex h-full w-full flex-col py-10 tablet:h-auto'
    >
      <div className='mb-5'>
        <Label htmlFor='username'>Nazwa użytkownika</Label>
        <Input
          type='text'
          placeholder='Nazwa użytkownika'
          id='username'
          {...register('username')}
          error={errors.username}
        />
      </div>
      <div className='mb-5'>
        <Label htmlFor='first_name'>Imię</Label>
        <Input
          type='text'
          placeholder='Andrzej'
          id='first_name'
          {...register('first_name')}
          error={errors.first_name}
        />
      </div>
      <div className='mb-5'>
        <Label htmlFor='last_name'>Nazwisko</Label>
        <Input
          type='text'
          placeholder='Kowalski'
          id='last_name'
          {...register('last_name')}
          error={errors.last_name}
        />
      </div>
      <div className='mb-5'>
        <Label htmlFor='email'>Adres e-mail</Label>
        <Input
          type='email'
          placeholder='example@example.com'
          id='email'
          {...register('email')}
          error={errors.email}
        />
      </div>
      <div className='mb-5'>
        <Label htmlFor='password'>Hasło</Label>
        <Input
          type='password'
          placeholder='********'
          id='password'
          {...register('password')}
          error={errors.password}
        />
      </div>
      <div className='mb-5'>
        <Label htmlFor='password2'>Powtórz hasło</Label>
        <Input
          type='password'
          placeholder='********'
          id='password2'
          {...register('password2')}
          error={errors.password2}
        />
      </div>
      <Checkbox
        id='terms'
        label='Akceptuję regulamin'
        {...register('terms')}
        error={errors.terms}
      />
      <Button
        textColor='white'
        bg='dark-blue'
        text='Zarejestruj się'
        type='submit'
        classes='mt-5'
      />
    </form>
  )
}
