import Link from "next/link";

export const Footer = () => {
  const now = new Date();
  const year = now.getFullYear();
  return (
    <footer className="w-full laptop:px-32 flex flex-col px-10 py-10 bg-medium-blue text-white">
      <div className="flex laptop:justify-between pb-8 py-10">
        <div className="space-y-4 w-full text-center laptop:text-left laptop:w-1/2">
          <p className="font-bold text-3xl">e-przychodnia</p>
          <p>
            Odkryj nowy wymiar opieki zdrowotnej online dzięki E-przychodni -
            szybko, wygodnie i bezpiecznie.
          </p>
        </div>
        <ul className="hidden laptop:flex text-sm laptop:gap-x-3 desktop:gap-x-6 font-medium">
          <li>
            <Link href="/">Strona Główna</Link>
          </li>
          <li>
            <Link href="/about">O Nas</Link>
          </li>
          <li>
            <Link href="/services">Usługi</Link>
          </li>
          <li>
            <Link href="/news">Aktualnośći</Link>
          </li>
          <li>
            <Link href="/contact">Kontakt</Link>
          </li>
        </ul>
      </div>

      <div className="w-full pt-5 flex flex-col text-center tablet:px-8 laptop:flex-row justify-between border-t-2 border-t-dark-blue/20">
        <p>©{year} E-przychodnia. All rights reserved</p>
        <div className="flex flex-col laptop:flex-row gap-x-3">
          <Link href="/privacy-policy">Privacy & Policy</Link>
          <Link href="/terms-and-conditions">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
};
