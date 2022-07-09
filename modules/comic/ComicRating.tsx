import { IconStar } from "components/icons";

const ComicRating = ({ score = "" }) => {
  return (
    <div className="my-3 flex items-center gap-x-2">
      <div className="flex">
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
      </div>
      <span>{score}</span>
    </div>
  );
};

export default ComicRating;
