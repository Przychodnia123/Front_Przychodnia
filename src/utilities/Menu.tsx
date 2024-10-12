import Link from "next/link";

type Props = {
  mobile?: boolean;
};

export const Menu = ({ mobile }: Props) => {
  return (
    <ul
      className={`${
        mobile
          ? "flex-col laptop:hidden text-md tablet:text-xl space-y-8"
          : "hidden laptop:flex text-sm gap-x-6"
      }  text-dark-blue font-semibold`}
    >
      <li>
        <Link href="/">Strona główna</Link>
      </li>
      <li>
        <Link href="/about">O nas</Link>
      </li>
      <li>
        <Link href="/services">Usługi</Link>
      </li>
      <li>
        <Link href="/news">Aktualności</Link>
      </li>
      <li>
        <Link href="/contact">Kontakt</Link>
      </li>
    </ul>
  );
};
