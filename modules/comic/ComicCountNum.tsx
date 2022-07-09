interface ComicCountNumProps {
  children: React.ReactNode;
  value: string;
}

const ComicCountNum = ({ value, children }: ComicCountNumProps) => {
  return (
    <div className="flex items-center gap-x-1">
      {children}
      <span className="font-semibold">{value}</span>
    </div>
  );
};

export default ComicCountNum;
