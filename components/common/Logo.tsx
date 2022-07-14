import { path } from "constants/path";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={path.home}>
      <a>
        <h1 className="font-bold text-green2d">Weeboo</h1>
      </a>
    </Link>
  );
};

export default Logo;
