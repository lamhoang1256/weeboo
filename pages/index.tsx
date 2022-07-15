import { Layout } from "components/layouts";
import { Pagination } from "components/pagination";
import { getHomeData } from "config/api";
import { IPaginationItem } from "interfaces/common";
import { IComicItem, IHomeBannerItem } from "interfaces/home";
import { HomeBanner, HomeComics } from "modules/home";

interface HomePageProps {
  banners: IHomeBannerItem[][];
  featureComics: IComicItem[];
  newestComics: IComicItem[];
  pagination: IPaginationItem[];
}

const HomePage = ({ banners, featureComics, newestComics, pagination }: HomePageProps) => {
  return (
    <Layout title="Trang chủ">
      <div className="layout-container">
        <HomeBanner banners={banners} />
        <HomeComics comics={featureComics} heading="Truyện đề cử" />
        <HomeComics comics={newestComics} heading="Truyện mới cập nhật" />
        <Pagination pagination={pagination} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const { data } = await getHomeData(query);
  const { banners, featureComics, newestComics, pagination } = data;
  return {
    props: { banners, featureComics, newestComics, pagination },
  };
}

export default HomePage;
