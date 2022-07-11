import { Option, Select } from "components/dropdown";

interface FilterSelectProps {
  filterList: {
    value: string;
    content: string;
    isSelected: boolean;
  }[];
  selected: string;
  setSelected?: any;
}

const FilterSelect = ({ filterList, selected, setSelected }: FilterSelectProps) => {
  return (
    <Select
      className="w-full"
      defaultValue={selected}
      handleChange={(e) => setSelected(e.target.value)}
    >
      {filterList?.map((item) => (
        <Option value={item.value} key={item.value}>
          {item.content}
        </Option>
      ))}
    </Select>
  );
};

export default FilterSelect;
