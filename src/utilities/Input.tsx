import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, Props>(({ label, error, ...props }, ref) => (
  <div>
      <label htmlFor={props.id}>{label}</label>
       <input
        className="w-full border
             border-light-gray
         rounded-md border-1  px-3.5 py-2 text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-dark-blue"
        placeholder={props.placeholder}
        type={props.type}
        ref={ref}
        id={props.id}
        {...props}
      />
      {error && <span>{error.message}</span>}
  </div>
));

Input.displayName = 'Input';
