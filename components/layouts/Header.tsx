import { Logo } from "components/common";
import { IconMenu } from "components/icons";
import { SearchBar } from "components/search";
import { path } from "constants/path";
import { signOut } from "firebase/auth";
import { auth } from "lib/firebase-app/config";
import Link from "next/link";
import { useState } from "react";
import { useStore } from "store";
import Navbar from "./Navbar";

const Header = () => {
  const currentUser = useStore((state: any) => state.currentUser);
  const logout = useStore((state: any) => state.logout);
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const handleLogout = () => {
    signOut(auth);
    logout();
  };

  return (
    <header>
      <div className="layout-container">
        <div className="h-20 flex justify-between items-center">
          <Logo />
          <div className="flex gap-x-6">
            <SearchBar className="hidden md:flex" />
            {currentUser?.email && (
              <button
                type="button"
                className="h-11 md:h-[50px] px-8 bg-linearGreen text-white rounded-lg font-semibold text-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            )}
            {!currentUser?.email && (
              <Link href={path.signIn}>
                <button
                  type="button"
                  className="h-11 md:h-[50px] px-8 bg-linearGreen text-white rounded-lg font-semibold text-lg"
                >
                  Login
                </button>
              </Link>
            )}
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
