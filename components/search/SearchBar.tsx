import { useState } from "react";
import { useRouter } from "next/router";
import { IconSearch } from "components/icons";

const SearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const handleSubmitSearch = (e: any) => {
    e.preventDefault();
    router.push(`/search?keyword=${encodeURI(keyword)}`);
  };

  return (
    <form
      onSubmit={handleSubmitSearch}
      className="border-[1px] border-[#ccc] h-[50px] px-6 rounded-lg flex justify-between items-center"
    >
      <input
        type="text"
        placeholder="Bạn muốn tìm truyện gì"
        className="outline-none pr-11"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="text-[#ccc]">
        <IconSearch />
      </button>
    </form>
  );
};

export default SearchBar;
