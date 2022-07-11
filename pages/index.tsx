import { Layout } from "components/layouts";
import { getHomeData } from "config/api";
import { IComicItems, IHomeBannerItem } from "interfaces/home";
import { HomeBanner, HomeComics } from "modules/home";

interface HomePageProps {
  data: {
    banners: IHomeBannerItem[][];
    featureComics: IComicItems;
    newestComics: IComicItems;
  };
}

const HomePage = ({ data }: HomePageProps) => {
  return (
    <Layout title="HomePage">
      <div className="layout-container">
        <HomeBanner banners={data?.banners} />
        <HomeComics data={data?.featureComics}></HomeComics>
        <HomeComics data={data?.newestComics}></HomeComics>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await getHomeData();
  return {
    props: { data },
  };
}

export default HomePage;
