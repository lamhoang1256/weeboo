import { Layout } from "components/layouts";
import { Pagination } from "components/pagination";
import { getDataBoyComicPage } from "config/api";
import { IPaginationItem } from "interfaces/common";
import { IComicItem } from "interfaces/home";
import { HomeComics } from "modules/home";

interface BoyComicPageProps {
  comics: IComicItem[];
  pagination: IPaginationItem[];
}

const BoyComicPage = ({ comics, pagination }: BoyComicPageProps) => {
  return (
    <Layout title="Truyện con trai">
      <div className="layout-container">
        <HomeComics comics={comics} heading="Truyện con trai" />
        <Pagination pagination={pagination} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const { data } = await getDataBoyComicPage(query);
  const { comics, pagination } = data;
  return {
    props: { comics, pagination },
  };
}

export default BoyComicPage;
