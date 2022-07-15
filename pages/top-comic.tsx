import { Layout } from "components/layouts";
import { getDataTopComicPage } from "config/api";
import { IComicItem } from "interfaces/home";
import { ITopComicItem } from "interfaces/top-comic";
import { FilterResults } from "modules/filter";
import { TopComicOptions } from "modules/top-comic";

interface TopComicPageProps {
  sort: ITopComicItem[];
  status: ITopComicItem[];
  results: IComicItem[];
}

const TopComicPage = ({ sort, status, results }: TopComicPageProps) => {
  const options = [...status, ...sort];
  return (
    <Layout title="Bảng xếp hạng">
      <div className="layout-container">
        <TopComicOptions options={options} />
        <FilterResults filterResults={results} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const { data } = await getDataTopComicPage(query);
  const { sort, status, results } = data;
  return {
    props: { sort, status, results },
  };
}

export default TopComicPage;
