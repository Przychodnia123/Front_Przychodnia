import { Title } from '@utilities/Title'
import Image from 'next/image'
import Link from 'next/link'

export const MainSection = () => {
  return (
    <section className='flex w-full flex-col-reverse gap-y-10 px-5 py-20 laptop:flex-row laptop:px-20 laptop:py-24 desktop:px-40'>
      <div className='flex w-full flex-col items-center justify-center gap-y-14 laptop:w-1/2 laptop:items-start'>
        <Title size='text-6xl'>Twoje zdrowie, nasza troska</Title>
        <p className='text-center text-lg laptop:text-justify'>
          Znajdź najnowsze i najbardziej innowacyjne rozwiązania w opiece
          zdrowotnej. Złóż prośbę o skierowanie na badania podstawowe, umów
          wizytę online, zamów e-receptę – wszystko w jednym miejscu. Dołącz do
          nas już dziś i zacznij z nami dbać o swoje zdrowie!
        </p>
        <div className='flex flex-col items-center gap-5 tablet:flex-row'>
          <Link
            href='/sign-up'
            className='inline-flex items-center justify-center rounded-xl bg-dark-blue px-10 py-5 font-medium text-white shadow-md'
          >
            Zarejestruj się teraz
          </Link>
          <p>
            Masz już konto?{' '}
            <Link className='font-medium text-light-blue' href='/sign-in'>
              Zaloguj się!
            </Link>
          </p>
        </div>
      </div>
      <div className='flex w-full items-center justify-center laptop:w-1/2'>
        <Image
          width={800}
          height={800}
          src={'/homepage-assets/doctor-main.JPG'}
          alt='main image'
        />
      </div>
    </section>
  )
}
