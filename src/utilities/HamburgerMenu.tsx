import { useOutsideClick } from '@/lib/hooks/useClickOutside'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Menu } from '@/utilities/Menu'
import { useState } from 'react'

export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const ref = useOutsideClick(() => {
    setMenuOpen(false)
  })

  const handleClick = () => {
    setMenuOpen(!menuOpen)
  }
  return (
    <>
      <button
        data-testid='hamburger-button'
        ref={ref}
        onClick={handleClick}
        className='text-dark-blue laptop:hidden'
      >
        <Bars3Icon className='size-9' />
      </button>
      {menuOpen && (
        <div
          data-testid='mobile-menu'
          ref={ref}
          className='absolute right-0 top-0 flex h-full w-1/2 justify-center rounded-md bg-white pt-28 text-dark-blue shadow-lg tablet:w-1/3'
        >
          <button className='absolute right-6 top-8' onClick={handleClick}>
            <XMarkIcon className='size-9' />
          </button>
          <Menu mobile />
        </div>
      )}
    </>
  )
}
