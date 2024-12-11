import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string
  type?: string
  bg?: 'dark-blue' | 'white'
  textColor: 'dark-blue' | 'white'
}

export const Button = ({ text, bg, textColor, type, ...props }: Props) => {
  return (
    <button
      type={type}
      className={`bg-${bg} text-${textColor} inline-flex items-center justify-center rounded-xl px-10 py-5 font-medium shadow-md`}
      {...props}
    >
      <span>{text}</span>
    </button>
  )
}
