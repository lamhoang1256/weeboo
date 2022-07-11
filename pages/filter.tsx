import { Layout } from "components/layouts";
import { getDataFilterPage } from "config/api";
import { IFilterOptions } from "interfaces/filter";
import { IComicItem } from "interfaces/home";
import { FilterOptions, FilterResults } from "modules/filter";
import { useState } from "react";

interface FilterPageProps {
  filterOptions: IFilterOptions;
  filterResults: IComicItem[];
}

const FilterPage = ({ filterOptions, filterResults }: FilterPageProps) => {
  const [params, setParams] = useState({
    genres: "",
    notgenres: "",
    gender: "-1",
    status: "-1",
    minchapter: "1",
    sort: "0",
  });

  return (
    <Layout title="FilterPage">
      <div className="layout-container">
        <FilterOptions filterOptions={filterOptions} params={params} setParams={setParams} />
        <FilterResults filterResults={filterResults} />
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const params =
    Object.keys(query).length === 0
      ? {
          genres: "",
          notgenres: "",
          gender: "-1",
          status: "-1",
          minchapter: "1",
          sort: "0",
        }
      : query;
  const { data } = await getDataFilterPage(params);
  const { filterOptions, filterResults } = data;
  return {
    props: { filterOptions, filterResults },
  };
}

export default FilterPage;
