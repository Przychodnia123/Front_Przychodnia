export type TitleProps = {
  children: string;
  size: "sm" | "md" | "text-2xl" | "text-6xl" | "text-5xl";
  textAlign?: "text-center" | "text-left";
};

export const Title = ({
  children,
  size,
  textAlign = "text-left",
}: TitleProps) => {
  return (
    <h2 className={`${size} ${textAlign} font-semibold text-dark-blue`}>
      {children}
    </h2>
  );
};
