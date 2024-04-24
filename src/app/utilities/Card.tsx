import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  paddingX?: "sm" | "md";
};

export const Card = ({ children, paddingX = "sm" }: Props) => {
  const cardPadding = paddingX === "sm" ? "px-5" : "px-14";
  return (
    <div className={`px-14 py-14 bg-white shadow-lg rounded-md`}>
      {children}
    </div>
  );
};
