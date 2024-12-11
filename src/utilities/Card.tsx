import { ReactNode } from 'react'

type Props = {
    children?: ReactNode
}

export const Card = ({ children }: Props) => {
    return (
        <div className={`rounded-md bg-white p-10 shadow-lg`}>{children}</div>
    )
}
