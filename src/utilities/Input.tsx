import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { cn } from "../lib/utils/cn";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ error, className, ...props }, ref) => (
    <>
    <input
      className={cn('w-full border-light-gray rounded-md border-1 px-3.5 py-2 border text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-dark-blue', className)}
      placeholder={props.placeholder}
      type={props.type}
      ref={ref}
      id={props.id}
      {...props}
    />
    {error && <span className="text-alert text-xs mb-2">{error.message}</span>}
  </>
));

Input.displayName = 'Input';
