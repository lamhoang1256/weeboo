import { useState } from "react";
import { Logo } from "components/common";
import { IconMenu } from "components/icons";
import { SearchBar } from "components/search";
import Navbar from "./Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="layout-container">
        <div className="h-20 flex justify-between items-center">
          <Logo />
          <div className="flex gap-x-6">
            <SearchBar className="hidden md:flex" />
            <button className="h-11 md:h-[50px] px-8 bg-linearGreen text-white rounded-lg font-semibold text-lg">
              Login
            </button>
            <button className="md:hidden" onClick={handleToggleMenu}>
              <IconMenu />
            </button>
          </div>
        </div>
      </div>
      <Navbar show={showMenu} toggleShow={handleToggleMenu} />
    </header>
  );
};

export default Header;
