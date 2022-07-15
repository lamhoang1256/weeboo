import { Heading } from "components/common";
import { Layout } from "components/layouts";
import { getSearchData } from "config/api";
import { ComicGrid, ComicItem } from "modules/comic";

interface SearchPageProps {
  searchResults: any;
}

const SearchPage = ({ searchResults }: SearchPageProps) => {
  return (
    <Layout title="Tìm kiếm">
      <div className="layout-container">
        <Heading className="my-3">Tìm kiếm</Heading>
        <ComicGrid>
          {searchResults?.map((comic: any) => (
            <ComicItem key={comic.slug} comic={comic} />
          ))}
        </ComicGrid>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query }: any) {
  const { keyword } = query;
  const { data } = await getSearchData(keyword);
  return {
    props: { searchResults: data },
  };
}

export default SearchPage;
