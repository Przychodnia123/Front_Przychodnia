"use client";

import { Button } from "@/src/app/utilities/Button";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

import { useOutsideClick } from "@/src/app/lib/data/hooks/useClickOutside";
import { HamburgerMenu } from "@/src/app/utilities/HamburgerMenu";
import { Menu } from "@/src/app/utilities/Menu";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
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
          <Button bg="dark-blue" textColor="white" text="Lorem Ipsum" />
        </div>
        <HamburgerMenu />
      </div>
    </nav>
  );
};
