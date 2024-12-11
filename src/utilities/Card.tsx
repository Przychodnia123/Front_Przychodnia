import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
  paddingX?: 'sm' | 'md'
}

export const Card = ({ children, paddingX = 'sm' }: Props) => {
  const cardPadding = paddingX === 'sm' ? 'px-5' : 'px-14'
  return <div className={`rounded-md bg-white p-10 shadow-lg`}>{children}</div>
}
