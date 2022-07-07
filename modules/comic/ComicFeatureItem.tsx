import { ITopComic } from "interfaces/home";
import Link from "next/link";

interface ComicFeatureItemProps {
  data: ITopComic;
}

const ComicFeatureItem = ({ data }: ComicFeatureItemProps) => {
  return (
    <Link href={`/comic/${data.slug}`}>
      <a className="block relative max-w-[200px] h-[300px] rounded-md overflow-hidden">
        <img src={data.posterUrl} alt="poster" className="object-cover w-full h-full" />
        <div
          className="absolute bottom-0 left-0 right-0 px-3 pt-[6px] h-[64px]"
          style={{ backgroundImage: "url(/images/shadow-over.png)" }}
        >
          <h3 className="text-white font-semibold line-clamp-1">{data.title}</h3>
          <div className="flex justify-between items-center text-white">
            <span>{data.newestChapter}</span>
            <span>{data.updatedAgo}</span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ComicFeatureItem;
