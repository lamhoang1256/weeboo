import { Comments } from "components/comment";
import { Layout } from "components/layouts";
import { getComicChapter } from "config/api";
import { path } from "constants/path";
import { IImageChapter, IComment, IWatchDetail } from "interfaces/read";
import { ComicTitle, ComicUpdatedAt } from "modules/comic";
import ComicReading from "modules/comic/ComicReading";

interface ComicChapterProps {
  imageUrls: IImageChapter[];
  comicDetail: IWatchDetail;
  comments: IComment[];
}

const ComicChapter = ({ comicDetail, imageUrls, comments }: ComicChapterProps) => {
  const { title, urlComic, chapter, updated } = comicDetail;
  return (
    <Layout title={`${title} ${chapter}`}>
      <div className="layout-container">
        <ComicTitle className="mt-2" type="big" to={`${path.detail}/${urlComic}`}>
          {title} <span className="font-medium">{chapter}</span>
        </ComicTitle>
        <ComicUpdatedAt className="block mt-1">{updated}</ComicUpdatedAt>
        <ComicReading imageUrls={imageUrls} />
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
