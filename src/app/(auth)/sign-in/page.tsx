import { SignInForm } from '@auth/sign-in/SignInForm'
import { Title } from '@utilities/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function SignIn() {
    return (
        <div className='flex h-auto w-full flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2'>
            <Image
                src='/nav-assets/logo.png'
                alt='Logo'
                width={208}
                height={71}
            />
            <Title size='text-5xl'>Zaloguj się</Title>
            <SignInForm />
            <p>
                Nie masz konta?
                <Link className='ml-3 text-light-blue' href={'/sign-up'}>
                    Zarejestruj się
                </Link>
            </p>
        </div>
    )
}
