import { useOutsideClick } from '@lib/hooks/useClickOutside'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import { Menu } from '@utilities/Menu'
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
                ref={ref}
                onClick={handleClick}
                className='text-dark-blue laptop:hidden'
            >
                <MenuRoundedIcon fontSize='large' />
            </button>
            {menuOpen && (
                <div
                    ref={ref}
                    className='absolute right-0 top-0 flex h-full w-1/2 justify-center rounded-md bg-white pt-28 text-dark-blue shadow-lg tablet:w-1/3'
                >
                    <button
                        className='absolute right-6 top-8'
                        onClick={handleClick}
                    >
                        <CloseRoundedIcon fontSize='large' />
                    </button>
                    <Menu mobile />
                </div>
            )}
        </>
    )
}
