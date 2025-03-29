import Link from 'next/link'
import { routes } from '@/lib/consts/routes'

type Props = {
  mobile?: boolean
}

export const Menu = ({ mobile }: Props) => {
  return (
    <ul
      className={`${
        mobile
          ? 'text-md flex-col space-y-8 tablet:text-xl laptop:hidden'
          : 'hidden gap-x-6 text-sm laptop:flex'
      } font-semibold text-dark-blue`}
    >
      <li>
        <Link href={routes.home}>Strona główna</Link>
      </li>
      <li>
        <Link href={routes.about}>O nas</Link>
      </li>
      <li>
        <Link href={routes.services}>Usługi</Link>
      </li>
      <li>
        <Link href={routes.news}>Aktualności</Link>
      </li>
      <li>
        <Link href={routes.contact}>Kontakt</Link>
      </li>
    </ul>
  )
}
