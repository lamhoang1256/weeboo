import { IOptionChapter } from "interfaces/detail";
import { IconEye } from "components/icons";
import Link from "next/link";
import { path } from "constants/path";

interface DetailEpisodeItemProps {
  episode: IOptionChapter;
}

const DetailEpisodeItem = ({ episode }: DetailEpisodeItemProps) => {
  const { title, href, updatedAt, viewCount } = episode;
  return (
    <Link href={`${path.read}/${href}`}>
      <a className="bg-[#f8f8f8] p-4 rounded-[10px] font-semibold">
        <h4>{title}</h4>
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

export default DetailEpisodeItem;
