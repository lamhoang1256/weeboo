import { IconStar } from "components/icons";

const ComicRating = () => {
  return (
    <div className="my-3 flex items-center gap-x-2">
      <div className="flex">
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
        <IconStar className="h-5 w-5 text-yellow-400"></IconStar>
      </div>
      <span>4.9</span>
    </div>
  );
};

export default ComicRating;
