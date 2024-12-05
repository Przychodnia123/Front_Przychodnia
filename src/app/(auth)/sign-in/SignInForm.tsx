'use client'
import { Input } from '@utilities/Input'
import { SignInValidationSchema } from '@auth/sign-in/signInValidationSchema'
import { Button } from '@utilities/Button'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'

type SignInFormValues = z.infer<typeof SignInValidationSchema>

export const SignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormValues>({
        resolver: zodResolver(SignInValidationSchema),
    })

    const onSubmit: SubmitHandler<SignInFormValues> = (values) => {
        // TODO: Handle form submission, e.g., send data to an API
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex h-full w-full flex-col space-y-5 py-10 tablet:h-auto'
        >
            <Input
                type='email'
                label='Adres e-mail'
                placeholder='example@example.com'
                id='email'
                {...register('email')}
                error={errors.email}
            />
            <Input
                type='password'
                label='Hasło'
                placeholder='********'
                id='password'
                {...register('password')}
                error={errors.password}
            />
            <div className='flex justify-between'>
                <label>
                    <input type='checkbox' />
                    <span className='ml-2'>Zapamiętaj hasło</span>
                </label>
                <Link className='text-light-blue' href='/'>
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
