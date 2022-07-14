import { Button } from "components/button";
import { ITopComicItem } from "interfaces/top-comic";
import { ComicGrid } from "modules/comic";
import classNames from "utils/classNames";

interface TopComicOptionsProps {
  options: ITopComicItem[];
}

const TopComicOptions = ({ options }: TopComicOptionsProps) => {
  const buttonStyles = "bg-[#ccc] h-11 rounded-md";
  return (
    <ComicGrid className="mt-4 items-end">
      {options.map((option) => {
        const activeStyles = option.active ? "bg-linearGreen text-white" : "";
        return (
          <Button
            to={option.href}
            key={option.title}
            className={classNames(buttonStyles, activeStyles)}
          >
            {option.title}
          </Button>
        );
      })}
    </ComicGrid>
  );
};

export default TopComicOptions;
