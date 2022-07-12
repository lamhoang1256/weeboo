import { useEffect, useReducer } from "react";
import { useRouter } from "next/router";
import { path } from "constants/path";
import { initialParamsFilter } from "constants/value";
import { IFilterOptions } from "interfaces/filter";
import { FilterGroup, FilterSelect } from "modules/filter";
import { ComicGrid } from "modules/comic";
import { Heading } from "components/common";
import { Button } from "components/button";

interface FilterOptionsProps {
  filterOptions: IFilterOptions;
}

const filterReducer = (state: any, action: any) => {
  switch (action.type) {
    case "GENRES":
      return { ...state, genres: action.payload };
    case "MINCHAPTER":
      return { ...state, minchapter: action.payload };
    case "GENDER":
      return { ...state, gender: action.payload };
    case "STATUS":
      return { ...state, status: action.payload };
    case "SORT":
      return { ...state, sort: action.payload };
    case "RESET":
      return initialParamsFilter;
    default:
      return state;
  }
};

const FilterOptions = ({ filterOptions }: FilterOptionsProps) => {
  const router = useRouter();
  const [state, dispatch] = useReducer(filterReducer, initialParamsFilter);
  useEffect(() => {
    router.push({
      pathname: path.filter,
      query: state,
    });
    console.log(state);
  }, [state]);

  return (
    <ComicGrid className="mt-4 items-end">
      <FilterGroup>
        <Heading>Thể loại</Heading>
        <FilterSelect
          type="GENRES"
          options={filterOptions.genres}
          selected={state.genres}
          dispatch={dispatch}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Số lượng chap</Heading>
        <FilterSelect
          type="MINCHAPTER"
          options={filterOptions.minchapter}
          selected={state.minchapter}
          dispatch={dispatch}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Dành cho</Heading>
        <FilterSelect
          type="GENDER"
          options={filterOptions.gender}
          selected={state.gender}
          dispatch={dispatch}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Tình trạng</Heading>
        <FilterSelect
          type="STATUS"
          options={filterOptions.status}
          selected={state.status}
          dispatch={dispatch}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Sắp xếp theo</Heading>
        <FilterSelect
          type="SORT"
          options={filterOptions.sort}
          selected={state.sort}
          dispatch={dispatch}
        />
      </FilterGroup>
      <Button handleOnClick={() => dispatch({ type: "RESET" })}>Reset</Button>
    </ComicGrid>
  );
};

export default FilterOptions;
