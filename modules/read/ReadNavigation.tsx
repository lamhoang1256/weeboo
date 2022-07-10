import { path } from "constants/path";
import { IOptionChapter } from "interfaces/detail";
import { useRouter } from "next/router";

interface ReadNavigationProps {
  listChapter: IOptionChapter[];
}

const ReadNavigation = ({ listChapter }: ReadNavigationProps) => {
  const router = useRouter();
  const { id } = router.query;
  const totalChaps = listChapter.length;
  const currentChapter = listChapter.findIndex((chapter) => chapter.id === id);
  const stylesButton =
    "px-4 md:px-[30px] h-11 rounded-lg bg-linearGreen text-white disabled:opacity-70";

  const handleChangeChapter = (action: number) => {
    const newChapter = listChapter[currentChapter + action * -1];
    if (newChapter) router.push(`${path.read}/${newChapter?.href}`);
  };
  return (
    <div className="flex gap-x-1">
      <button
        type="button"
        className={stylesButton}
        onClick={() => handleChangeChapter(-1)}
        disabled={currentChapter === totalChaps - 1}
      >
        Trước
      </button>
      <button
        type="button"
        className={stylesButton}
        onClick={() => handleChangeChapter(+1)}
        disabled={currentChapter === 0}
      >
        Tiếp
      </button>
    </div>
  );
};

export default ReadNavigation;
