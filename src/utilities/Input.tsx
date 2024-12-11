import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: FieldError
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, ...props }, ref) => (
    <div>
      <label htmlFor={props.id}>{label}</label>
      <input
        className='border-1 placeholder:text-gray-400 sm:text-sm sm:leading-6 w-full rounded-md border border-light-gray px-3.5 py-2 text-black shadow-sm focus:outline-dark-blue'
        placeholder={props.placeholder}
        type={props.type}
        ref={ref}
        id={props.id}
        {...props}
      />
      {error && <span className='text-xs text-alert'>{error.message}</span>}
    </div>
  )
)

Input.displayName = 'Input'
