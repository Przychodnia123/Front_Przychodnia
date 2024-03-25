export const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full laptop:px-32 flex flex-col px-10 py-10 bg-medium-blue">
      <div>
        <p className="text-white font-bold text-xl ">e-przychodnia</p>
        <p className="text-white">
          Our vision is to provide convenience and help increase your sales
          business.
        </p>
      </div>
    </footer>
  );
};
