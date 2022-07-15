import { path } from "constants/path";
import Link from "next/link";
import classNames from "utils/classNames";

const Logo = ({ className = "" }) => {
  return (
    <Link href={path.home}>
      <a>
        <h1 className={classNames("font-bold text-green2d", className)}>Minitoon</h1>
      </a>
    </Link>
  );
};

export default Logo;
