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
import { Button } from "components/button";
import { useRouter } from "next/router";
import { path } from "constants/path";

interface ComicDetailProps {
  detail: IComicDetail;
  listChapter: IOptionChapter[];
  comments: IComment[];
}

const ComicDetail = ({ detail, listChapter, comments }: ComicDetailProps) => {
  const router = useRouter();
  const viewFirstChapter = () => {
    const totalChapter = listChapter.length;
    const firstChapter = listChapter[totalChapter - 1];
    router.push(`${path.read}/${firstChapter.href}`);
  };
  const viewLastChapter = () => {
    const lastChapter = listChapter[0];
    router.push(`${path.read}/${lastChapter.href}`);
  };

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
                <IconEye className="text-green2d w-4 h-4" />
              </ComicCountNum>
              <ComicCountNum value={detail?.followCount}>
                <IconLike className="text-green2d w-4 h-4" />
              </ComicCountNum>
            </div>
            <ComicRating score={detail?.ratingValue} />
            <ComicMetaGroup label="Tác giả" content={detail?.author}></ComicMetaGroup>
            <ComicMetaGroup label="Tình trạng" content={detail?.status}></ComicMetaGroup>
            <ComicMetaGroup label="Thể loại" content={detail?.categories}></ComicMetaGroup>
            <div className="flex flex-wrap gap-2 mt-4">
              <Button className="h-[40px]" handleOnClick={viewFirstChapter}>
                Xem từ đầu
              </Button>
              <Button className="h-[40px]" handleOnClick={viewLastChapter}>
                Xem mới nhất
              </Button>
              <Button className="h-[40px]">Đọc tiếp</Button>
            </div>
            <div className="flex gap-x-2 mt-4 items-center">
              <Button className="h-[40px]">Theo dõi</Button>
              <p>
                <span className="font-bold">{detail?.followCount} </span>
                đã theo dõi
              </p>
            </div>
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
