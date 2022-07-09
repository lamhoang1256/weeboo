import { SearchBar } from "components/search";
import { path } from "constants/path";
import Link from "next/link";

const Header = () => {
  return (
    <header className="hidden md:block">
      <div className="layout-container">
        <div className="h-20 flex justify-between items-center">
          <Link href={path.home}>
            <a>
              <h1 className="font-bold text-green2d">Weeboo</h1>
            </a>
          </Link>
          <div className="flex gap-x-6">
            <SearchBar />
            <button
              type="button"
              className="h-[50px] px-8 bg-linearGreen text-white rounded-lg font-semibold text-lg"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
