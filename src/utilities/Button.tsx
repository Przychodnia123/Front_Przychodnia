import { ButtonHTMLAttributes } from 'react'
import { cn } from '../lib/utils/cn'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  type?: string
  bg?: 'dark-blue' | 'white'
  textColor: 'dark-blue' | 'white'
  classes?: string
  disabled?: boolean
}

export const Button = ({
  text,
  bg,
  textColor,
  type,
  classes,
  disabled,
  ...props
}: Props) => {
  return (
    <button
      type={type}
      className={cn(
        `bg-${bg} text-${textColor} inline-flex items-center justify-center rounded-xl px-10 py-5 font-medium shadow-md`,
        classes,
        disabled && 'bg-dark-gray'
      )}
      disabled={disabled}
      {...props}
    >
      <span>{text}</span>
    </button>
  )
}
