import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "utils/classNames";

interface ImageProps {
  url: string;
  to?: string;
  alt?: string;
  className?: string;
}

const Image = ({ to, url, alt = "", className = "w-full h-full" }: ImageProps) => {
  if (to) {
    return (
      <Link href={to}>
        <LazyLoadImage src={url} alt={alt} className={classNames("object-cover", className)} />
      </Link>
    );
  }
  return <LazyLoadImage src={url} alt={alt} className={classNames("object-cover", className)} />;
};

export default Image;
