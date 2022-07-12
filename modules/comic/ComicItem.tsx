import { IComicItem } from "interfaces/home";
import { path } from "constants/path";
import ComicImage from "./ComicImage";
import ComicMeta from "./ComicMeta";
import ComicTitle from "./ComicTitle";

interface ComicItemProps {
  comic: IComicItem;
}

const ComicItem = ({ comic }: ComicItemProps) => {
  const { posterUrl, slug, title, newestChapter, newestHref, updatedAgo } = comic;
  const meta = {
    newChapter: newestChapter,
    to: `${path.read}/${newestHref}`,
    updatedAgo: updatedAgo,
  };
  return (
    <div>
      <ComicImage to={`${path.detail}/${slug}`} url={posterUrl} />
      <ComicTitle className="mt-2" to={`${path.detail}/${slug}`}>
        {title}
      </ComicTitle>
      <ComicMeta meta={meta} />
    </div>
  );
};

export default ComicItem;
