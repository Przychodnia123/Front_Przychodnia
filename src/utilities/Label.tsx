import { LabelHTMLAttributes, HTMLAttributes } from 'react'
import { cn } from '../lib/utils/cn'

type Props = LabelHTMLAttributes<HTMLLabelElement> &
  HTMLAttributes<HTMLParagraphElement>

export const Label = ({ htmlFor, children, className, ...res }: Props) => (
  <label
    {...res}
    className={cn('text-md inline-block', className)}
    htmlFor={htmlFor}
  >
    {children}
  </label>
)

Label.displayName = 'Label'
