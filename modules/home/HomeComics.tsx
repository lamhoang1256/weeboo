import { IComicItems } from "interfaces/home";
import { ComicGrid, ComicItem } from "modules/comic";

interface HomeComicsProps {
  data: IComicItems;
}

const HomeComics = ({ data }: HomeComicsProps) => {
  return (
    <div>
      <h2 className="py-3 font-bold color-[#333]">{data?.headline}</h2>
      <ComicGrid>
        {data?.comics?.map((comic) => (
          <ComicItem key={comic.slug} comic={comic} />
        ))}
      </ComicGrid>
    </div>
  );
};

export default HomeComics;
