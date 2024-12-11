'use client'

import { UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { Button } from '@utilities/Button'
import { useOutsideClick } from '@lib/hooks/useClickOutside'
import { HamburgerMenu } from '@utilities/HamburgerMenu'
import { Menu } from '@utilities/Menu'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export const Navigation = () => {
    const [open, setOpen] = useState(false)

    const ref = useOutsideClick(() => {
        setOpen(false)
    })

    const handleClick = () => {
        setOpen(!open)
    }

    return (
        <nav className='flex w-full items-center justify-between px-5 py-4 laptop:px-10 desktop:px-40'>
            <Link className='w-2/4 tablet:w-auto' href='/'>
                <Image
                    src='/nav-assets/logo.png'
                    alt='Logo'
                    width={208}
                    height={71}
                />
            </Link>
            <Menu />
            <div className='flex items-center gap-x-4 laptop:gap-x-8'>
                <button
                    ref={ref}
                    onClick={handleClick}
                    className='relative text-dark-blue'
                >
                    <UserCircleIcon className='size-9' />
                    {open && (
                        <div className='group absolute -right-20 top-[70px] flex w-[200px] flex-col rounded-xl bg-white p-5 text-left shadow-md'>
                            <Link
                                className='w-full rounded-md p-2 hover:bg-medium-gray/25 hover:font-medium'
                                href='/logowanie'
                            >
                                Zaloguj się
                            </Link>
                            <Link
                                className='w-full rounded-md p-2 hover:bg-medium-gray/25 hover:font-medium'
                                href='/rejestracja'
                            >
                                Zarejestruj się
                            </Link>
                        </div>
                    )}
                </button>
                <div className='text-dark-blue'>
                    <ShoppingCartIcon className='size-9' />
                </div>
                <div className='hidden laptop:flex'>
                    <Link
                        className='inline-flex items-center justify-center rounded-xl bg-dark-blue px-10 py-5 font-medium text-white shadow-md'
                        href='/logowanie'
                    >
                        Zaloguj się
                    </Link>
                </div>
                <HamburgerMenu />
            </div>
        </nav>
    )
}
