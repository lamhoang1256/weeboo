interface ComicGridProps {
  children: React.ReactNode;
}

const ComicGrid = ({ children }: ComicGridProps) => {
  return <div className="comic-gird gap-x-3 gap-y-5">{children}</div>;
};

export default ComicGrid;
