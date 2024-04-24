export const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full laptop:px-32 flex flex-col px-10 py-10 bg-medium-blue">
      <div className="text-white">
        <p className="font-bold text-xl ">e-przychodnia</p>
        <p>
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
        <p>{year}</p>
      </div>
    </footer>
  );
};
