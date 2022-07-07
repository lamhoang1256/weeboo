import { getTopComics } from "utils/api";
import { Layout } from "components/layouts";

interface HomeProps {
  topComics: any;
}

const Home = ({ topComics }: HomeProps) => {
  // console.log("topComics: ", topComics);
  return (
    <Layout title="HomePage">
      <div className="layout-container">main</div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getTopComics();
  return {
    props: { topComics: data },
  };
}

export default Home;
