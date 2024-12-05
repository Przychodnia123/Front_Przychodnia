import { SignUpForm } from '@auth/sign-up/SignUpForm'
import { Title } from '@utilities/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUp() {
    return (
        <div className='flex h-auto w-full flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2'>
            <Image
                src='/nav-assets/logo.png'
                alt='Logo'
                width={208}
                height={71}
            />
            <Title size='text-5xl'>Zarejestruj się</Title>
            <SignUpForm />
            <p>
                Masz już konto?
                <Link className='ml-3 text-light-blue' href={'/sign-in'}>
                    Zaloguj się
                </Link>
            </p>
        </div>
    )
}
