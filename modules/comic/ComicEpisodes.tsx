import { v4 as uuidv4 } from "uuid";
import ComicEpisodeItem from "./ComicEpisodeItem";

const ComicEpisodes = () => {
  return (
    <div className="my-6">
      <div className="flex gap-x-2">
        <h3 className="text-green2d font-semibold">
          Danh sách chap <span className="text-sm text-black">(Cập nhật đến chap 200)</span>
        </h3>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-3">
        {Array(12)
          .fill(0)
          .map((item) => (
            <ComicEpisodeItem
              key={uuidv4()}
              id="854655"
              url="toan-chuc-phap-su/chap-871/854655"
              chapter="Chapter 871"
              updatedAt="23:25 19/05"
              viewCount="73.749"
            />
          ))}
      </div>
    </div>
  );
};

export default ComicEpisodes;
