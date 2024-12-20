import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form'
import { Label } from '@utilities/Label'
import { Input } from '@utilities/Input'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: FieldError
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ error, label, ...props }, ref) => (
    <>
      <div className='flex gap-2'>
        <Input
          type='checkbox'
          id={props.id}
          ref={ref}
          className='w-auto shadow-none'
          {...props}
        />
        <Label htmlFor={props.id}>{label}</Label>
      </div>
      {error && (
        <span className='mb-2 text-xs text-alert'>{error.message}</span>
      )}
    </>
  )
)

Checkbox.displayName = 'Checkbox'
