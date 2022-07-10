import { Image } from "components/image";
import { IImageChapter } from "interfaces/read";
import { v4 as uuidv4 } from "uuid";

interface ComicReadingProps {
  imageUrls: IImageChapter[];
}

const ComicReading = ({ imageUrls }: ComicReadingProps) => {
  return (
    <div className="max-w-[770px] mx-auto mt-8">
      <div className="mx-[-15px]">
        {imageUrls?.map((image) => (
          <Image
            key={uuidv4()}
            url={`/api/images?url=${encodeURIComponent(image.imageUrl)}`}
            alt={image.alt}
          />
        ))}
      </div>
    </div>
  );
};

export default ComicReading;
