import { Button } from '@utilities/Button'
import Image from 'next/image'
import Link from 'next/link'

export const CTASection = () => {
  return (
    <section className='flex items-center bg-dark-blue px-5 py-20 text-2xl text-white laptop:space-x-20 laptop:px-20 desktop:space-x-40 desktop:px-40'>
      <div className='hidden w-1/3 items-center justify-center laptop:flex'>
        <Image
          src='/homepage-assets/doctor.png'
          alt='service image'
          width={400}
          height={400}
        />
      </div>
      <div className='flex w-full flex-col items-center space-y-14 laptop:w-2/3 laptop:items-start'>
        <p className='text-center text-3xl laptop:text-left'>
          Czuj się bezpiecznie i dbaj o swoje zdrowie! Skontaktuj się z nami już
          teraz! Wspólnie zadbamy o Twoje zdrowie i dobre samopoczucie!
        </p>
        <Link
          href='/sign-in'
          className='inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 font-medium text-dark-blue shadow-md'
        >
          Zarejestruj się na e-wizytę
        </Link>
      </div>
    </section>
  )
}
