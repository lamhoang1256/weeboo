import { v4 as uuidv4 } from "uuid";
import { Image } from "components/image";
import { Layout } from "components/layouts";
import { getComicChapter } from "config/api";
import { IWatchComment, IWatchDetail } from "interfaces/watch";
import { ComicTitle, ComicUpdatedAt } from "modules/comic";
import { Comments } from "components/comment";

interface ComicChapterProps {
  imageUrls: string[];
  comicDetail: IWatchDetail;
  comments: IWatchComment[];
}

const ComicChapter = ({ comicDetail, imageUrls, comments }: ComicChapterProps) => {
  return (
    <Layout title={`${comicDetail?.title} ${comicDetail?.chapter}`}>
      <div className="layout-container">
        <div className="flex gap-x-2">
          <ComicTitle>{comicDetail?.title}</ComicTitle>
          <span>{comicDetail?.chapter}</span>
          <ComicUpdatedAt>{comicDetail?.updated}</ComicUpdatedAt>
        </div>
        <div className="max-w-[770px] mx-auto">
          <div className="mx-[-15px]">
            {imageUrls?.map((image) => (
              <Image url={image} key={uuidv4()} alt={comicDetail?.title} />
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
