import Link from "next/link";
import classNames from "utils/classNames";

interface ComicTitleProps {
  to?: string;
  className?: string;
  type?: string;
  children: React.ReactNode;
}

const ComicTitle = ({ to, children, className = "", type = "" }: ComicTitleProps) => {
  let styles;
  switch (type) {
    case "big":
      styles = "text-xl lg:text-2xl";
      break;
    default:
      styles = "text-[17px]";
      break;
  }
  if (to) {
    return (
      <Link href={to}>
        <a className={classNames("block text-[#1f2937] line-clamp-2 font-bold", styles, className)}>
          {children}
        </a>
      </Link>
    );
  }
  return (
    <h3 className={classNames("block text-[#0f1e36]  line-clamp-2 font-bold", styles, className)}>
      {children}
    </h3>
  );
};

export default ComicTitle;
