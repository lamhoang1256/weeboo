import { IComicItem } from "interfaces/home";
import { ComicGrid, ComicItem } from "modules/comic";

interface FilterResultsProps {
  filterResults: IComicItem[];
}

const FilterResults = ({ filterResults }: FilterResultsProps) => {
  return (
    <ComicGrid className="mt-8">
      {filterResults?.map((comic) => (
        <ComicItem key={comic.slug} comic={comic} />
      ))}
    </ComicGrid>
  );
};

export default FilterResults;
