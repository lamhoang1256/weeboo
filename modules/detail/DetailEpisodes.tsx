import { useState } from "react";
import { IOptionChapter } from "interfaces/detail";
import DetailEpisodeItem from "./DetailEpisodeItem";

interface DetailEpisodesProps {
  listChapter: IOptionChapter[];
}

const DetailEpisodes = ({ listChapter }: DetailEpisodesProps) => {
  const [chapterPerPage, setChapterPerPage] = useState(8);
  const handleShowMore = () => {
    setChapterPerPage(chapterPerPage + 8);
  };

  return (
    <div className="my-6">
      <div className="flex gap-x-2">
        <h3 className="text-green2d font-semibold">
          Danh sách chap{" "}
          <span className="block md:inline-block text-sm text-black">
            (Cập nhật đến chap {listChapter[0].title})
          </span>
        </h3>
      </div>
      <div className="mt-4 grid-detail-episodes gap-3">
        {listChapter?.slice(0, chapterPerPage)?.map((episode) => (
          <DetailEpisodeItem episode={episode} key={episode.id} />
        ))}
      </div>
      <button
        type="button"
        onClick={handleShowMore}
        className="my-4 w-full h-11 bg-linearGreen rounded-md text-white"
      >
        Show more
      </button>
    </div>
  );
};

export default DetailEpisodes;
