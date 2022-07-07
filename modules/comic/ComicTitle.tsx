import Link from "next/link";

interface ComicTitleProps {
  to?: string;
  children: React.ReactNode;
}

const ComicTitle = ({ to, children }: ComicTitleProps) => {
  if (to) {
    return (
      <Link href={to}>
        <a className="block mt-2 text-[#0f1e36] text-[17px] line-clamp-2 font-bold">{children}</a>
      </Link>
    );
  }
  return <a className="block mt-2 text-[#0f1e36] text-[17px] line-clamp-2 font-bold">{children}</a>;
};

export default ComicTitle;
