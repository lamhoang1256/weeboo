import { v4 as uuidv4 } from "uuid";
import { Image } from "components/image";
import { Layout } from "components/layouts";
import { getComicChapter } from "config/api";
import { IWatchComment, IWatchDetail } from "interfaces/watch";
import { ComicTitle, ComicUpdatedAt } from "modules/comic";
import { Comments } from "components/comment";
import { path } from "constants/path";

interface ComicChapterProps {
  imageUrls: string[];
  comicDetail: IWatchDetail;
  comments: IWatchComment[];
}

const ComicChapter = ({ comicDetail, imageUrls, comments }: ComicChapterProps) => {
  return (
    <Layout title={`${comicDetail?.title} ${comicDetail?.chapter}`}>
      <div className="layout-container">
        <div className="mt-2 flex flex-wrap gap-x-2">
          <ComicTitle
            to={`${path.detail}/${comicDetail?.urlComic}`}
            className="text-xl lg:text-2xl"
          >
            {comicDetail?.title}
          </ComicTitle>
          <span className="text-xl lg:text-2xl">{comicDetail?.chapter}</span>
        </div>
        <ComicUpdatedAt className="block mt-1">{comicDetail?.updated}</ComicUpdatedAt>
        <div className="max-w-[770px] mx-auto mt-8">
          <div className="mx-[-15px]">
            {imageUrls?.map((image) => (
              <Image
                url={`http://localhost:3000/api/images?url=${encodeURIComponent(image)}`}
                key={uuidv4()}
                alt={comicDetail?.title}
              />
            ))}
          </div>
        </div>
        <Comments comments={comments} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const { slug, chapter, id } = params;
  const { data } = await getComicChapter(slug, chapter, id);
  const { comicDetail, imageUrls, comments } = data;
  return {
    props: { comicDetail, imageUrls, comments },
  };
}

export default ComicChapter;
