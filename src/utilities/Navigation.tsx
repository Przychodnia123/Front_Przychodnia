"use client";

import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { Button } from "@utilities/Button";
import { useOutsideClick } from "@lib/hooks/useClickOutside";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { HamburgerMenu } from "@utilities/HamburgerMenu";
import { Menu } from "@utilities/Menu";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  const ref = useOutsideClick(() => {
    setOpen(false);
  });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="w-full px-5 laptop:px-10 desktop:px-40 flex justify-between items-center py-4">
      <Link className="w-2/4 tablet:w-auto" href="/">
        <Image src="/nav-assets/logo.png" alt="Logo" width={208} height={71} />
      </Link>

      <Menu />

      <div className="flex items-center gap-x-4 laptop:gap-x-8">
        <button
          ref={ref}
          onClick={handleClick}
          className="text-dark-blue relative"
        >
          <AccountCircleRoundedIcon fontSize="large" />
          {open && (
            <div className="absolute -right-20 top-[70px] w-[200px] p-5  flex text-left flex-col rounded-xl group bg-white shadow-md">
              <Link
                className="hover:bg-medium-gray/25 w-full rounded-md hover:font-medium p-2"
                href="/sign-in"
              >
                Zaloguj się
              </Link>
              <Link
                className="hover:bg-medium-gray/25 w-full rounded-md hover:font-medium p-2"
                href="/sign-up"
              >
                Zarejestruj się
              </Link>
            </div>
          )}
        </button>
        <div className="text-dark-blue">
          <ShoppingCartRoundedIcon fontSize="large" />
        </div>
        <div className="hidden laptop:flex">
          <Link className="bg-dark-blue text-white px-10 py-5 rounded-xl font-medium inline-flex items-center justify-center shadow-md" href="/sign-in">Zaloguj się</Link>
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};
