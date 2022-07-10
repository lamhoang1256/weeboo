import { path } from "constants/path";
import { IOptionChapter } from "interfaces/detail";
import { useRouter } from "next/router";

interface ReadSelectProps {
  listChapter: IOptionChapter[];
}

const ReadSelect = ({ listChapter }: ReadSelectProps) => {
  const router = useRouter();
  const { id } = router.query;
  const handleChangeChapter = (href: any) => {
    // href => Ex: van-co-toi-cuong-tong/chap-154/867663
    router.push(`${path.read}/${href}`);
  };

  return (
    <select
      id="listChapter"
      className="h-11 pr-4 pl-2 text-sm md:text-base md:pr-[30px] md:pl-[16px] rounded bg-[#ebebeb]"
      onChange={(e) => handleChangeChapter(e.target.value)}
    >
      {listChapter?.map((chapter) => {
        const isSelected = chapter.id === id ? true : false;
        return (
          <option value={chapter.href} key={chapter.id} selected={isSelected}>
            {chapter.title}
          </option>
        );
      })}
    </select>
  );
};

export default ReadSelect;
