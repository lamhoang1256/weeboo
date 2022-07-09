import { IOptionChapter } from "interfaces/detail";
import { IconEye } from "components/icons";
import Link from "next/link";

const ComicEpisodeItem = ({ id, chapter, url, updatedAt, viewCount }: IOptionChapter) => {
  return (
    <Link href={url}>
      <a className="bg-[#f8f8f8] p-4 rounded-[10px] font-semibold">
        <h4>{chapter}</h4>
        <div className="flex justify-between text-[#999]">
          <span>{updatedAt}</span>
          <div className="flex items-center gap-x-1">
            <IconEye />
            <span>{viewCount}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ComicEpisodeItem;
