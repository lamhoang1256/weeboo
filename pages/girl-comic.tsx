import { Layout } from "components/layouts";
import { Pagination } from "components/pagination";
import { getDataGirlComicPage } from "config/api";
import { IPaginationItem } from "interfaces/common";
import { IComicItem } from "interfaces/home";
import { HomeComics } from "modules/home";

interface GirlComicPageProps {
  comics: IComicItem[];
  pagination: IPaginationItem[];
}

const GirlComicPage = ({ comics, pagination }: GirlComicPageProps) => {
  return (
    <Layout title="Truyện con gái">
      <div className="layout-container">
        <HomeComics comics={comics} heading="Truyện con gái" />
        <Pagination pagination={pagination} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const { data } = await getDataGirlComicPage(query);
  const { comics, pagination } = data;
  return {
    props: { comics, pagination },
  };
}

export default GirlComicPage;
