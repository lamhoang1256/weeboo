import { SearchBar } from "components/search";

const Header = () => {
  return (
    <header>
      <div className="layout-container">
        <div className="h-20 flex justify-between items-center">
          <h1 className="font-bold text-green2d">Weeboo</h1>
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
