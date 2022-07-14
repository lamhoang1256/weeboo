import { Option, Select } from "components/dropdown";
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
    <Select id="listChapter" onChange={handleChangeChapter} className="max-w-[170px]">
      {listChapter?.map((chapter) => {
        const isSelected = chapter.id === id ? true : false;
        return (
          <Option value={chapter.href} key={chapter.id} selected={isSelected}>
            {chapter.title}
          </Option>
        );
      })}
    </Select>
  );
};

export default ReadSelect;
