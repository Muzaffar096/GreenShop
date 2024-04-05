import React from "react";
import SearchIcon from "../../../public/images/search.svg?react";
import LogoutIcon from "../../../public/images/Logout.svg?react";
import ModalSearch from "./ModalSearch";
import ColorBadge from "../ColorBadge";
import LoginButton from "./LoginButtons";
import ModalLogin from "../ModalLogin";
import LikedProductsIcon from "./LikedProductsIcon";

const HeaderButtons = ({ handleclick, setModalSearch }) => {
  const isModalSearchVisible = !setModalSearch;

  return (
    <div className="flex gap-8 md:gap-4 md:justify-between sm:gap-2 md:mr-3 lg:gap-4 md:w-[80%] items-center">
      <ModalSearch className={isModalSearchVisible && "block cursor-pointer"} />
      <ColorBadge />
      <LikedProductsIcon />
      <ModalLogin />
    </div>
  );
};

export default HeaderButtons;
