import Link from "next/link";

interface ComicImageProps {
  to?: string;
  url: string;
}

const ComicImage = ({ to, url }: ComicImageProps) => {
  if (to) {
    return (
      <Link href={to}>
        <a>
          <img src={url} className="rounded-md aspect-[2/3] w-full" alt="poster" />
        </a>
      </Link>
    );
  }
  return <img src={url} className="rounded-md aspect-[2/3] w-full" alt="poster" />;
};

export default ComicImage;
