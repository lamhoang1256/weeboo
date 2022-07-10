import { path } from "constants/path";
import { getComicChapter, getComicDetail } from "config/api";
import { IComicDetail, IOptionChapter } from "interfaces/detail";
import { IImageChapter, IComment, IChapterReadDetail } from "interfaces/read";
import { Layout } from "components/layouts";
import { Comments } from "components/comment";
import { ComicTitle, ComicUpdatedAt, ComicReading } from "modules/comic";
import { ReadNavigation, ReadSelect } from "modules/read";

interface ReadPageProps {
  imageUrls: IImageChapter[];
  detailChapter: IChapterReadDetail;
  comments: IComment[];
  comicDetail: {
    detail: IComicDetail;
    listChapter: IOptionChapter[];
    comments: IComment[];
  };
}

const ReadPage = ({ detailChapter, imageUrls, comments, comicDetail }: ReadPageProps) => {
  const { title, urlComic, chapter, updatedAt } = detailChapter;
  const { listChapter } = comicDetail;
  return (
    <Layout title={`${title} ${chapter}`}>
      <div className="layout-container">
        <ComicTitle className="mt-2" type="big" to={`${path.detail}/${urlComic}`}>
          {title} <span className="font-medium">{chapter}</span>
        </ComicTitle>
        <ComicUpdatedAt className="block mt-1">{updatedAt}</ComicUpdatedAt>
        <div className="mt-4 flex justify-between">
          <ReadSelect listChapter={listChapter} />
          <ReadNavigation listChapter={listChapter} />
        </div>
        <ComicReading imageUrls={imageUrls} />
        <div className="mt-8 flex justify-between">
          <ReadSelect listChapter={listChapter} />
          <ReadNavigation listChapter={listChapter} />
        </div>
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

export default ReadPage;
