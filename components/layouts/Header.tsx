import { IconMenu } from "components/icons";
import { SearchBar } from "components/search";
import { path } from "constants/path";
import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header>
      <div className="layout-container">
        <div className="h-20 flex justify-between items-center">
          <Link href={path.home}>
            <a>
              <h1 className="font-bold text-green2d">Weeboo</h1>
            </a>
          </Link>
          <div className="flex gap-x-6">
            <SearchBar />
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
