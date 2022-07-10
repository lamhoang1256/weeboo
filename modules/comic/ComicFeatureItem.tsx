import { path } from "constants/path";
import { IFeatureComic } from "interfaces/home";
import Link from "next/link";
import ComicImage from "./ComicImage";
import ComicMeta from "./ComicMeta";

interface ComicFeatureItemProps {
  data: IFeatureComic;
}

const ComicFeatureItem = ({ data }: ComicFeatureItemProps) => {
  const meta = {
    to: `${path.read}/${data.slug}`,
    newChapter: data.newestChapter,
    updatedAgo: data.updatedAgo,
  };
  return (
    <Link href={`${path.detail}/${data.slug}`}>
      <div className="block relative max-w-[200px] h-[300px] rounded-md overflow-hidden">
        <ComicImage url={data.posterUrl} className="h-full" />
        <div
          className="absolute bottom-0 left-0 right-0 px-3 pt-[6px] h-[64px]"
          style={{ backgroundImage: "url(/images/shadow-over.png)" }}
        >
          <h3 className="text-white font-semibold line-clamp-1">{data.title}</h3>
          <ComicMeta meta={meta} className="text-[#fff]"></ComicMeta>
        </div>
      </div>
    </Link>
  );
};

export default ComicFeatureItem;
