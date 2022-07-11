import { Button } from "components/button";
import { Heading } from "components/common";
import { IFilterOptions } from "interfaces/filter";
import { FilterGroup, FilterSelect } from "modules/filter";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

interface FilterOptionsProps {
  filterOptions: IFilterOptions;
  params: {
    genres: string;
    notgenres: string;
    gender: string;
    status: string;
    minchapter: string;
    sort: string;
  };
  setParams: Dispatch<
    SetStateAction<{
      genres: string;
      notgenres: string;
      gender: string;
      status: string;
      minchapter: string;
      sort: string;
    }>
  >;
}

const FilterOptions = ({ params, setParams, filterOptions }: FilterOptionsProps) => {
  const router = useRouter();
  const setGenres = (genres: string) => {
    setParams({ ...params, genres });
  };
  const setGender = (gender: string) => {
    setParams({ ...params, gender });
  };
  const setStatus = (status: string) => {
    setParams({ ...params, status });
  };
  const setMinchapter = (minchapter: string) => {
    setParams({ ...params, minchapter });
  };
  const setSort = (sort: string) => {
    setParams({ ...params, sort });
  };

  useEffect(() => {
    router.push({
      pathname: "/filter",
      query: params,
    });
  }, [params]);

  return (
    <div className="mt-4 comic-gird gap-3 items-end">
      <FilterGroup>
        <Heading>Thể loại</Heading>
        <FilterSelect
          filterList={filterOptions.genres}
          selected={params.genres}
          setSelected={setGenres}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Số lượng chap</Heading>
        <FilterSelect
          filterList={filterOptions.minchapter}
          selected={params.minchapter}
          setSelected={setMinchapter}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Dành cho</Heading>
        <FilterSelect
          filterList={filterOptions.gender}
          selected={params.gender}
          setSelected={setGender}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Tình trạng</Heading>
        <FilterSelect
          filterList={filterOptions.status}
          selected={params.status}
          setSelected={setStatus}
        />
      </FilterGroup>
      <FilterGroup>
        <Heading>Sắp xếp theo</Heading>
        <FilterSelect
          filterList={filterOptions.sort}
          selected={params.sort}
          setSelected={setSort}
        />
      </FilterGroup>
      <Button>Reset</Button>
    </div>
  );
};

export default FilterOptions;
