import classNames from "utils/classNames";

interface ComicGridProps {
  className?: string;
  children: React.ReactNode;
}

const ComicGrid = ({ children, className }: ComicGridProps) => {
  return <div className={classNames("comic-gird gap-x-3 gap-y-5", className)}>{children}</div>;
};

export default ComicGrid;
