import { LazyLoadImage } from "react-lazy-load-image-component";
import { path } from "constants/path";
import { useState } from "react";
import Link from "next/link";

interface ImageResizeProps {
  to?: string;
  url: string;
  width?: string;
  height?: string;
  alt?: string;
  className?: string;
  imageError?: string;
}

const ImageResize = ({
  to,
  url,
  width,
  height,
  alt,
  className,
  imageError = "/images/no-image.png",
}: ImageResizeProps) => {
  const [fallback, setFallback] = useState("");
  const handleErrorImage = () => {
    setFallback(imageError);
  };
  if (to) {
    return (
      <Link href={to}>
        <LazyLoadImage
          onError={handleErrorImage}
          className={className}
          src={fallback || path.resizeImage(url, width, height)}
          effect="opacity"
          alt={alt}
        />
      </Link>
    );
  }
  return (
    <LazyLoadImage
      onError={handleErrorImage}
      className={className}
      src={fallback || path.resizeImage(url, width, height)}
      effect="opacity"
      alt={alt}
    />
  );
};

ImageResize.defaultProps = {
  to: "",
  height: "",
  width: "",
  alt: "",
  className: "",
};

export default ImageResize;
