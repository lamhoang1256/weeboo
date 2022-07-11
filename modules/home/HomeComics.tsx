import { Heading } from "components/common";
import { IComicItem } from "interfaces/home";
import { ComicGrid, ComicItem } from "modules/comic";

interface HomeComicsProps {
  comics: IComicItem[];
  heading: string;
}

const HomeComics = ({ heading, comics }: HomeComicsProps) => {
  return (
    <div>
      <Heading>{heading}</Heading>
      <ComicGrid>
        {comics?.map((comic) => (
          <ComicItem key={comic.slug} comic={comic} />
        ))}
      </ComicGrid>
    </div>
  );
};

export default HomeComics;
