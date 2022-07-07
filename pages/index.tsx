import { getHomeData } from "utils/api";
import { Layout } from "components/layouts";
import { HomeFeature, HomeNewest } from "modules/home";
import { INewestComics, ITopComics } from "interfaces/home";

interface HomeProps {
  data: {
    topComics: ITopComics;
    newestComics: INewestComics;
  };
}

const Home = ({ data }: HomeProps) => {
  return (
    <Layout title="HomePage">
      <div className="layout-container">
        <HomeFeature topComics={data.topComics}></HomeFeature>
        <HomeNewest data={data.newestComics}></HomeNewest>
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

export default Home;
