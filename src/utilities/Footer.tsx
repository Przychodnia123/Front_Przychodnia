import Link from 'next/link'

export const Footer = () => {
  const now = new Date()
  const year = now.getFullYear()
  return (
    <footer className='flex w-full flex-col bg-medium-blue px-10 py-10 text-white laptop:px-32'>
      <div className='flex py-10 pb-8 laptop:justify-between'>
        <div className='w-full space-y-4 text-center laptop:w-1/2 laptop:text-left'>
          <p className='text-3xl font-bold'>e-przychodnia</p>
          <p>
            Odkryj nowy wymiar opieki zdrowotnej online dzięki e-przychodni -
            szybko, wygodnie i bezpiecznie.
          </p>
        </div>
        <ul className='hidden text-sm font-medium laptop:flex laptop:gap-x-3 desktop:gap-x-6'>
          <li>
            <Link href='/'>Strona główna</Link>
          </li>
          <li>
            <Link href='/about'>O nas</Link>
          </li>
          <li>
            <Link href='/services'>Usługi</Link>
          </li>
          <li>
            <Link href='/news'>Aktualnośći</Link>
          </li>
          <li>
            <Link href='/contact'>Kontakt</Link>
          </li>
        </ul>
      </div>

      <div className='flex w-full flex-col justify-between border-t-2 border-t-dark-blue/20 pt-5 text-center tablet:px-8 laptop:flex-row'>
        <p>©{year} e-przychodnia. All rights reserved</p>
        <div className='flex flex-col gap-x-3 laptop:flex-row'>
          <Link href='/privacy-policy'>Privacy & Policy</Link>
          <Link href='/terms-and-conditions'>Terms & Condition</Link>
        </div>
      </div>
    </footer>
  )
}
