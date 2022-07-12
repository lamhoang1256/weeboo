import classNames from "utils/classNames";

interface ComicGridProps {
  className?: string;
  children: React.ReactNode;
}

const ComicGrid = ({ children, className = "" }: ComicGridProps) => {
  return <div className={classNames("comic-gird", className)}>{children}</div>;
};

export default ComicGrid;
