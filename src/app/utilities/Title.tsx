type Props = {
  children: string;
  size: "sm" | "md" | "text-2xl" | "text-6xl" | "text-5xl";
  textAlign?: "text-center" | "text-left";
};

export const Title = ({ children, size, textAlign = "text-left" }: Props) => {
  return (
    <h2
      className={`${size} laptop:${textAlign}  font-semibold text-center text-dark-blue`}
    >
      {children}
    </h2>
  );
};
