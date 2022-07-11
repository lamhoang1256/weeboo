import { getHomeData } from "config/api";
import { Layout } from "components/layouts";
import { HomeFeature, HomeNewest } from "modules/home";
import { IComicItems, IFeatureComics } from "interfaces/home";

interface HomePageProps {
  data: {
    featureComics: IFeatureComics;
    newestComics: IComicItems;
  };
}

const HomePage = ({ data }: HomePageProps) => {
  return (
    <Layout title="HomePage">
      <div className="layout-container">
        <HomeFeature featureComics={data?.featureComics}></HomeFeature>
        <HomeNewest data={data?.newestComics}></HomeNewest>
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
