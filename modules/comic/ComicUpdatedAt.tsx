interface ComicUpdatedAtProps {
  children: React.ReactNode;
  className?: string;
}

const ComicUpdatedAt = ({ className, children }: ComicUpdatedAtProps) => {
  return <span className={className}>{children}</span>;
};

export default ComicUpdatedAt;
