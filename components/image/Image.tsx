import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "utils/classNames";

interface ImageProps {
  url: string;
  to?: string;
  alt?: string;
  className?: string;
}

const Image = ({ to, url, alt = "", className = "" }: ImageProps) => {
  if (to) {
    return (
      <Link href={to}>
        <LazyLoadImage
          src={url}
          alt={alt}
          className={classNames("w-full h-full object-cover", className)}
        />
      </Link>
    );
  }
  return (
    <LazyLoadImage
      src={url}
      alt={alt}
      className={classNames("w-full h-full object-cover", className)}
    />
  );
};

export default Image;
