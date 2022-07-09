import Link from "next/link";
import classNames from "utils/classNames";

interface ComicTitleProps {
  to?: string;
  className?: string;
  children: React.ReactNode;
}

const ComicTitle = ({ to, children, className = "text-[17px]" }: ComicTitleProps) => {
  if (to) {
    return (
      <Link href={to}>
        <a className={classNames("block text-[#0f1e36] line-clamp-2 font-bold", className)}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <a className={classNames("block text-[#0f1e36]  line-clamp-2 font-bold", className)}>
      {children}
    </a>
  );
};

export default ComicTitle;
