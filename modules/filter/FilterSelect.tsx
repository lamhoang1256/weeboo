import { Dispatch } from "react";
import { IFilterItem } from "interfaces/filter";
import { Option, Select } from "components/dropdown";

interface FilterSelectProps {
  type: string;
  options: IFilterItem[];
  selected: string;
  dispatch: Dispatch<any>;
}

const FilterSelect = ({ type, options, selected, dispatch }: FilterSelectProps) => {
  const handleChangeSelect = (value: string) => {
    dispatch({
      type,
      payload: value,
    });
  };

  return (
    <Select
      className="w-full"
      value={selected}
      onChange={(e) => handleChangeSelect(e.target.value)}
    >
      {options?.map((item) => (
        <Option value={item.value} key={item.value}>
          {item.content}
        </Option>
      ))}
    </Select>
  );
};

export default FilterSelect;
