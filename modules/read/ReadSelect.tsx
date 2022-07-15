import { Option, Select } from "components/dropdown";
import { path } from "constants/path";
import { IOptionChapter } from "interfaces/detail";
import { useRouter } from "next/router";
import { useState } from "react";

interface ReadSelectProps {
  listChapter: IOptionChapter[];
}

const ReadSelect = ({ listChapter }: ReadSelectProps) => {
  const router = useRouter();
  const { id } = router.query;
  const selected = listChapter.find((chapter) => chapter.id === id);
  const [selectedChapter, setSelectedChapter] = useState(selected);

  const handleChangeChapter = (e: any) => {
    const value = e.target.value;
    const selectedId = value.split("/")[2];
    const selected = listChapter.find((chapter) => chapter.id === selectedId);
    router.push(`${path.read}/${value}`);
    setSelectedChapter(selected);
  };

  return (
    <Select
      id="listChapter"
      onChange={handleChangeChapter}
      className="max-w-[170px]"
      value={selectedChapter?.href}
    >
      {listChapter?.map((chapter) => {
        const isSelected = chapter.id === id ? true : false;
        return (
          <Option value={chapter.href} key={chapter.id}>
            {chapter.title}
          </Option>
        );
      })}
    </Select>
  );
};

export default ReadSelect;
