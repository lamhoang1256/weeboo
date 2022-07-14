import { Layout } from "components/layouts";
import { getDataTopComicPage } from "config/api";
import { initialParamsFilter } from "constants/value";
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
  const options = [...sort, ...status];
  console.log("options: ", options);
  return (
    <Layout title="TopComicPage">
      <div className="layout-container">
        <TopComicOptions options={options} />
        <FilterResults filterResults={results} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const params = Object.keys(query).length === 0 ? { status: -1, sort: 10 } : query;
  const { data } = await getDataTopComicPage(params);
  const { sort, status, results } = data;
  return {
    props: { sort, status, results },
  };
}

export default TopComicPage;
