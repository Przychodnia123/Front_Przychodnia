import Link from 'next/link'
import Image from 'next/image'

import { Title } from '@/utilities/Title'
import { routes } from '@/lib/consts/routes'

import { ResetPasswordForm } from '@/app/(auth)/reset-password/ResetPasswordForm'

export default function ResetPassword() {
  return (
    <div className='flex h-auto w-full flex-col items-center gap-y-4 rounded-3xl bg-white px-5 py-10 shadow-md tablet:h-auto tablet:w-3/4 tablet:px-16 laptop:w-1/2'>
      <Link href={routes.home}>
        <Image src='/nav-assets/logo.png' alt='Logo' width={208} height={71} />
      </Link>
      <Title size='text-5xl' textAlign='text-center'>
        Zapomniałeś hasła?
      </Title>
      <p className='pt-5 text-center text-dark-blue'>
        Podaj swój adres e-mail, aby odzyskać hasło
      </p>
      <ResetPasswordForm />
      <p className='text-center text-dark-blue'>
        Pamiętasz hasło?{' '}
        <Link className='text-light-blue' href={routes.signIn}>
          Wróć do logowania
        </Link>
      </p>
    </div>
  )
}
