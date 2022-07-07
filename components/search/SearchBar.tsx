import { IconSearch } from "components/icons";

interface SearchBarProps {}

const SearchBar = ({}: SearchBarProps) => {
  return (
    <form className="border-[1px] border-[#ccc] h-[50px] px-6 rounded-lg flex justify-between items-center">
      <input type="text" placeholder="Bạn muốn tìm truyện gì" className="outline-none pr-11" />
      <button type="submit" className="text-[#ccc]">
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchBar;
