import { getHomeData } from "utils/api";
import { Layout } from "components/layouts";
import HomeBanner from "modules/home/HomeBanner";

interface HomeProps {
  data: any;
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
