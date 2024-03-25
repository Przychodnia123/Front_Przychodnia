import { ReactNode } from "react";

type CardProps = {
  children?: ReactNode;
  paddingX?: "sm" | "md";
};

export const Card = ({ children, paddingX = "sm" }: CardProps) => {
  const cardPadding = paddingX === "sm" ? "px-5" : "px-14";
  return (
    <div className={`px-14 py-14 bg-white shadow-lg rounded-md`}>
      {children}
    </div>
  );
};
