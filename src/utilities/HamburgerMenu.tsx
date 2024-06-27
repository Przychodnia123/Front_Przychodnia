import { useOutsideClick } from "@lib/hooks/useClickOutside";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Menu } from "@utilities/Menu";
import { useState } from "react";

export const HamburgerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useOutsideClick(() => {
    setMenuOpen(false);
  });

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <button
        ref={ref}
        onClick={handleClick}
        className="text-dark-blue laptop:hidden"
      >
        <MenuRoundedIcon fontSize="large" />
      </button>
      {menuOpen && (
        <div
          ref={ref}
          className="absolute shadow-lg pt-28 rounded-md flex justify-center top-0 right-0 bg-white w-1/2 tablet:w-1/3 h-full text-dark-blue"
        >
          <button className="absolute top-8 right-6" onClick={handleClick}>
            <CloseRoundedIcon fontSize="large" />
          </button>
          <Menu mobile />
        </div>
      )}
    </>
  );
};
