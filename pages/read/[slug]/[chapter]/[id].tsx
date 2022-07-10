import { Comments } from "components/comment";
import { Layout } from "components/layouts";
import { getComicChapter, getComicDetail } from "config/api";
import { path } from "constants/path";
import { IDetail, IOptionChapter } from "interfaces/detail";
import { IImageChapter, IComment, IWatchDetail } from "interfaces/read";
import { ComicTitle, ComicUpdatedAt, ComicReading } from "modules/comic";
import { ReadNavigation, ReadSelect } from "modules/read";

interface ComicChapterProps {
  imageUrls: IImageChapter[];
  detailChapter: IWatchDetail;
  comments: IComment[];
  comicDetail: {
    detail: IDetail;
    listChapter: IOptionChapter[];
    comments: IComment[];
  };
}

const ComicChapter = ({ detailChapter, imageUrls, comments, comicDetail }: ComicChapterProps) => {
  const { title, urlComic, chapter, updated } = detailChapter;
  const { listChapter } = comicDetail;

  return (
    <Layout title={`${title} ${chapter}`}>
      <div className="layout-container">
        <ComicTitle className="mt-2" type="big" to={`${path.detail}/${urlComic}`}>
          {title} <span className="font-medium">{chapter}</span>
        </ComicTitle>
        <ComicUpdatedAt className="block mt-1">{updated}</ComicUpdatedAt>
        <div className="mt-4 flex justify-between">
          <ReadSelect listChapter={listChapter} />
          <ReadNavigation listChapter={listChapter} />
        </div>
        <ComicReading imageUrls={imageUrls} />
        <Comments comments={comments} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const { slug, chapter, id } = params;
  const { data } = await getComicChapter(slug, chapter, id);
  const response = await getComicDetail(slug);
  const comicDetail = response.data;
  const { detailChapter, imageUrls, comments } = data;
  return {
    props: { comicDetail, detailChapter, imageUrls, comments },
  };
}

export default ComicChapter;
