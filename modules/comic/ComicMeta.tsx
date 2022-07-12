import Link from "next/link";
import classNames from "utils/classNames";

interface ComicMetaProps {
  className?: string;
  meta: {
    newChapter: string;
    updatedAgo: string;
    to: string;
  };
}

const ComicMeta = ({ meta, className = "" }: ComicMetaProps) => {
  const { newChapter, updatedAgo, to } = meta;
  return (
    <div className="mt-2 flex flex-col mobile380:flex-row mobile380:items-end gap-y-1 justify-between ">
      <Link href={to}>
        <a className={classNames("text-[#333] text-sm font-semibold", className)}>{newChapter}</a>
      </Link>
      <Link href={to}>
        <a className={classNames("text-[#8a8a8f] text-sm", className)}>{updatedAgo}</a>
      </Link>
    </div>
  );
};

export default ComicMeta;
