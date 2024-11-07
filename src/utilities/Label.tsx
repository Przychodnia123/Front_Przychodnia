import { LabelHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "../lib/utils/cn";

type Props = LabelHTMLAttributes<HTMLLabelElement> &
  HTMLAttributes<HTMLParagraphElement>


export const Label = ({ htmlFor, children, className, ...res }: Props) => {
    if (!htmlFor) {
        return (
          <p {...res} className={cn('inline-block text-md', className)}>
            {children}
          </p>
        );
      }
    
      return (
        <label {...res} className={cn('inline-block text-md', className)}>
          {children}
        </label>
      );
};

Label.displayName = 'Label';
