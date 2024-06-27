import { ErrorMessage, Field } from "formik";

type Props = {
  type: string;
  value?: string;
  name: string;
  id?: string;
  placeholder?: string;
  label: string;
  onChange: (e: React.ChangeEvent<any>) => void;
};

export const Input = ({
  value,
  type,
  name,
  label,
  placeholder,
  id,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col gap-y-3">
      <label htmlFor={id}>{label}</label>
      <Field
        className="w-full border
             border-light-gray
         rounded-md border-1  px-3.5 py-2 text-black shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:outline-dark-blue"
        placeholder={placeholder}
        type={type}
        name={name}
        id={id}
        value={value}
        {...props}
      />
      <ErrorMessage
        className="text-alert text-xs"
        name={name}
        component="div"
      />
    </div>
  );
};
