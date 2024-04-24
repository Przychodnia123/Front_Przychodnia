import { ButtonHTMLAttributes } from "react";

type Props = {
  text: string;
  bg?: "dark-blue" | "white";
  textColor: "dark-blue" | "white";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ text, bg, textColor, ...props }: Props) => {
  return (
    <button
      className={`bg-${bg} text-${textColor} px-10 py-5 rounded-xl font-medium inline-flex items-center shadow-md`}
      {...props}
    >
      <span>{text}</span>
    </button>
  );
};
