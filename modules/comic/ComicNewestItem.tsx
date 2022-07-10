import { INewestComic } from "interfaces/home";
import { path } from "constants/path";
import ComicImage from "./ComicImage";
import ComicMeta from "./ComicMeta";
import ComicTitle from "./ComicTitle";

interface ComicNewestItemProps {
  comic: INewestComic;
}

const ComicNewestItem = ({ comic }: ComicNewestItemProps) => {
  const { posterUrl, slug, title, newestChapter, newestUrl, updatedAgo } = comic;
  const meta = {
    newChapter: newestChapter,
    to: `${path.read}/${newestUrl}`,
    updatedAgo: updatedAgo,
  };
  return (
    <div className="max-w-[200px]">
      <ComicImage to={`${path.detail}/${slug}`} url={posterUrl} />
      <ComicTitle to={`${path.detail}/${slug}`}>{title}</ComicTitle>
      <ComicMeta meta={meta} />
    </div>
  );
};

export default ComicNewestItem;
