import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
  paddingX?: number;
  paddingY?: number;
};

export const Card = ({ children, paddingX, paddingY }: CardProps) => {
  const px = paddingX?.toString();
  const py = paddingY?.toString();

  return (
    <div className={`px-[${px}px] py-[${py}px] bg-white shadow-lg rounded-md`}>
      {children}
    </div>
  );
};
