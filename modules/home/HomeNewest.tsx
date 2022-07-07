import { INewestComics } from "interfaces/home";
import { ComicNewestItem } from "modules/comic";

interface HomeNewestProps {
  data: INewestComics;
}

const HomeNewest = ({ data }: HomeNewestProps) => {
  return (
    <>
      <h2 className="py-3 font-bold color-[#333]">{data.headline}</h2>
      <div className="grid-home-newest gap-x-3 gap-y-5">
        {data?.comics?.map((comic) => (
          <ComicNewestItem key={comic.slug} comic={comic} />
        ))}
      </div>
    </>
  );
};

export default HomeNewest;
