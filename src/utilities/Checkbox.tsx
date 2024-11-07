import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import { Label } from "@utilities/Label";
import { Input } from "@utilities/Input";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: FieldError;
}

export const Checkbox = forwardRef<HTMLInputElement, Props>(({ error, label, ...props }, ref) => (
   <>
    <div className="flex gap-2">
        <Input
            type="checkbox"
            id={props.id}
            ref={ref}
            className="shadow-none w-auto"
            {...props}
        />
        <Label>{label}</Label>
    </div>
    {error && <span className="text-alert text-xs mb-2">{error.message}</span>}
    </>
));

Checkbox.displayName = 'Checkbox';
