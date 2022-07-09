import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import classNames from "utils/classNames";

interface ComicImageProps {
  to?: string;
  url: string;
  className?: string;
}

const ComicImage = ({ to, url, className = "" }: ComicImageProps) => {
  if (to) {
    return (
      <Link href={to}>
        <LazyLoadImage
          src={url}
          className={classNames("rounded-md aspect-[2/3] w-full cursor-pointer", className)}
          alt="poster"
        />
      </Link>
    );
  }
  return (
    <LazyLoadImage
      src={url}
      className={classNames("rounded-md aspect-[2/3] w-full", className)}
      alt="poster"
    />
  );
};

export default ComicImage;
