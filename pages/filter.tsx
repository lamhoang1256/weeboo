import { Layout } from "components/layouts";
import { getDataFilterPage } from "config/api";
import { initialParamsFilter } from "constants/value";
import { IFilterOptions } from "interfaces/filter";
import { IComicItem } from "interfaces/home";
import { FilterOptions, FilterResults } from "modules/filter";

interface FilterPageProps {
  filterOptions: IFilterOptions;
  filterResults: IComicItem[];
}

const FilterPage = ({ filterOptions, filterResults }: FilterPageProps) => {
  return (
    <Layout title="Bộ lạc">
      <div className="layout-container">
        <FilterOptions filterOptions={filterOptions} />
        <FilterResults filterResults={filterResults} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const params = Object.keys(query).length === 0 ? initialParamsFilter : query;
  const { data } = await getDataFilterPage(params);
  const { filterOptions, filterResults } = data;
  return {
    props: { filterOptions, filterResults },
  };
}

export default FilterPage;
