import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from '../lib/utils/cn'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, className, ...props }, ref) => (
    <>
      <input
        className={cn(
          'border-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full rounded-md border border-light-gray px-3.5 py-2 text-black shadow-sm focus:outline-dark-blue',
          className
        )}
        placeholder={props.placeholder}
        type={props.type}
        ref={ref}
        id={props.id}
        {...props}
      />
      {error && (
        <span className='mb-2 text-xs text-alert'>{error.message}</span>
      )}
    </>
  )
)

Input.displayName = 'Input'
