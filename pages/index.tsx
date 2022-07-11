import { Layout } from "components/layouts";
import { getHomeData } from "config/api";
import { IComicItem, IHomeBannerItem } from "interfaces/home";
import { HomeBanner, HomeComics } from "modules/home";

interface HomePageProps {
  banners: IHomeBannerItem[][];
  featureComics: IComicItem[];
  newestComics: IComicItem[];
}

const HomePage = ({ banners, featureComics, newestComics }: HomePageProps) => {
  return (
    <Layout title="HomePage">
      <div className="layout-container">
        <HomeBanner banners={banners} />
        <HomeComics comics={featureComics} heading="Truyện đề cử" />
        <HomeComics comics={newestComics} heading="Truyện mới cập nhật" />
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await getHomeData();
  const { banners, featureComics, newestComics } = data;
  return {
    props: { banners, featureComics, newestComics },
  };
}

export default HomePage;
