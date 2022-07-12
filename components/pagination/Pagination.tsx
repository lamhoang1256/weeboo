import { IPaginationItem } from "interfaces/common";
import Link from "next/link";

interface PaginationProps {
  pagination: IPaginationItem[];
}

const Pagination = ({ pagination }: PaginationProps) => {
  return (
    <div className="my-8 flex justify-center gap-1">
      {pagination?.map((item) => (
        <Link href={item.href} key={item.display}>
          <button className="flex items-center justify-center w-10 h-10 rounded bg-blue-200">
            {item.display}
          </button>
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
