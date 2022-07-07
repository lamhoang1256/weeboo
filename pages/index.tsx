import { getHomeData } from "utils/api";
import { Layout } from "components/layouts";
import HomeBanner from "modules/home/HomeBanner";
import { ILastestComics, ITopComics } from "interfaces/home";

interface HomeProps {
  data: {
    topComics: ITopComics;
    lastestComics: ILastestComics;
  };
}

const Home = ({ data }: HomeProps) => {
  return (
    <Layout title="HomePage">
      <div className="layout-container">
        <HomeBanner topComics={data.topComics}></HomeBanner>
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
