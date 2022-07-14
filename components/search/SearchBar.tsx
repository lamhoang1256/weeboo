import { useState } from "react";
import { useRouter } from "next/router";
import { IconSearch } from "components/icons";
import classNames from "utils/classNames";

interface SearchBarProps {
  className: string;
  show?: boolean;
  toggleShow?: () => void;
}

const SearchBar = ({ className = "", show, toggleShow }: SearchBarProps) => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?keyword=${encodeURI(keyword)}`);
    setKeyword("");
    if (show && toggleShow) toggleShow();
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className={classNames(
        "bg-white border-[1px] border-[#ccc] px-6 rounded-lg justify-between items-center",
        className
      )}
    >
      <input
        type="text"
        value={keyword}
        placeholder="Bạn muốn tìm truyện gì"
        className="outline-none pr-11 h-full"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="text-[#ccc]">
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchBar;
