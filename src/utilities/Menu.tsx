import Link from 'next/link'

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
                <Link href='/'>Strona główna</Link>
            </li>
            <li>
                <Link href='/about'>O nas</Link>
            </li>
            <li>
                <Link href='/services'>Usługi</Link>
            </li>
            <li>
                <Link href='/news'>Aktualności</Link>
            </li>
            <li>
                <Link href='/contact'>Kontakt</Link>
            </li>
        </ul>
    )
}
