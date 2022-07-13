import { IPaginationItem } from "interfaces/common";
import Link from "next/link";
import classNames from "utils/classNames";

interface PaginationProps {
  pagination: IPaginationItem[];
}

const Pagination = ({ pagination }: PaginationProps) => {
  return (
    <div className="my-8 flex flex-wrap justify-center items-center gap-1">
      {pagination?.map((item, index) => {
        if (index === 0) return null;
        const buttonStyles = "flex items-center justify-center w-10 h-10 rounded bg-[#ccc]";
        const active = item.active ? "active" : "";
        return (
          <Link href={item.href} key={item.display}>
            <button className={classNames(buttonStyles, active)}>{item.display}</button>
          </Link>
        );
      })}
    </div>
  );
};

export default Pagination;
