import { IOptionChapter } from "interfaces/detail";
import { v4 as uuidv4 } from "uuid";
import ComicEpisodeItem from "./ComicEpisodeItem";

interface ComicEpisodesProps {
  listChapter: IOptionChapter[];
}

const ComicEpisodes = ({ listChapter }: ComicEpisodesProps) => {
  return (
    <div className="my-6">
      <div className="flex gap-x-2">
        <h3 className="text-green2d font-semibold">
          Danh sách chap{" "}
          <span className="text-sm text-black">(Cập nhật đến chap {listChapter[0].title})</span>
        </h3>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {listChapter?.map((chapter) => (
          <ComicEpisodeItem
            key={chapter.id}
            id={chapter.id}
            url={chapter.url}
            title={chapter.title}
            updatedAt={chapter.updatedAt}
            viewCount={chapter.viewCount}
          />
        ))}
      </div>
    </div>
  );
};

export default ComicEpisodes;
