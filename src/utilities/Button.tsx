import { ButtonHTMLAttributes } from "react";

type Props = {
  text: string;
  type?: string;
  bg?: "dark-blue" | "white";
  textColor: "dark-blue" | "white";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, bg, textColor, type, ...props }: Props) => {
  return (
    <button
      type={type}
      className={`bg-${bg} text-${textColor} px-10 py-5 rounded-xl font-medium inline-flex items-center justify-center shadow-md`}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};
