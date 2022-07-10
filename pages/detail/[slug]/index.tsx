import { getComicDetail } from "config/api";
import { IComicDetail, IOptionChapter } from "interfaces/detail";
import { IconEye, IconLike } from "components/icons";
import { IComment } from "interfaces/read";
import { Comments } from "components/comment";
import { Layout } from "components/layouts";
import { DetailEpisodes } from "modules/detail";
import {
  ComicImage,
  ComicTitle,
  ComicMetaGroup,
  ComicDesc,
  ComicRating,
  ComicUpdatedAt,
  ComicCountNum,
} from "modules/comic";

interface ComicDetailProps {
  detail: IComicDetail;
  listChapter: IOptionChapter[];
  comments: IComment[];
}

const ComicDetail = ({ detail, listChapter, comments }: ComicDetailProps) => {
  return (
    <Layout title={detail.title}>
      <div className="layout-container">
        <div className="flex flex-col md:flex-row gap-y-6 gap-x-[50px] pt-[45px]">
          <div className="mx-auto md:mx-0 flex-shrink-0 w-[240px]">
            <ComicImage url={detail?.posterUrl} />
          </div>
          <div>
            <ComicTitle className="text-[22px]">{detail?.title}</ComicTitle>
            <ComicUpdatedAt>{detail?.updatedAt}</ComicUpdatedAt>
            <div className="my-3 flex items-center gap-6">
              <ComicCountNum value={detail?.viewCount}>
                <IconEye className="text-green2d h-4 h-4" />
              </ComicCountNum>
              <ComicCountNum value={detail?.followCount}>
                <IconLike className="text-green2d h-4 h-4" />
              </ComicCountNum>
            </div>
            <ComicRating score={detail?.ratingValue} />
            <ComicMetaGroup label="Tác giả" content={detail?.author}></ComicMetaGroup>
            <ComicMetaGroup label="Tình trạng" content={detail?.status}></ComicMetaGroup>
            <ComicMetaGroup label="Thể loại" content={detail?.categories}></ComicMetaGroup>
          </div>
        </div>
        <ComicDesc label="Tóm tắt">{detail?.description}</ComicDesc>
        <DetailEpisodes listChapter={listChapter} />
        <Comments comments={comments} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }: any) {
  const { slug } = params;
  const { data } = await getComicDetail(slug);
  const { detail, listChapter, comments } = data;
  return {
    props: { detail, listChapter, comments },
  };
}

export default ComicDetail;
