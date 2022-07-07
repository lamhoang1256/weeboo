import Link from "next/link";

interface ComicMetaProps {
  meta: {
    newChapter: string;
    updatedAgo: string;
    newestChapterUrl: string;
  };
}

const ComicMeta = ({ meta }: ComicMetaProps) => {
  if (!meta) return null;
  const { newChapter, updatedAgo, newestChapterUrl } = meta;
  return (
    <div className="mt-2 flex justify-between items-end">
      <Link href={newestChapterUrl}>
        <a className="text-[#333] text-sm font-semibold">{newChapter}</a>
      </Link>
      <Link href={newestChapterUrl}>
        <a className="text-[#8a8a8f] text-sm">{updatedAgo}</a>
      </Link>
    </div>
  );
};

export default ComicMeta;
