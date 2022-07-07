import { getTopComics } from "utils/api";

interface HomeProps {
  topComics: any;
}

const Home = ({ topComics }: HomeProps) => {
  return <div className="text-center">{JSON.stringify(topComics)}</div>;
};

export async function getStaticProps() {
  const data = await getTopComics();
  return {
    props: { topComics: data },
  };
}

export default Home;
