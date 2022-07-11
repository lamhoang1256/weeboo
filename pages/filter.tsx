import { Heading } from "components/common";
import { Option, Select } from "components/dropdown";
import { Layout } from "components/layouts";

interface FilterPageProps {}

const FilterPage = (props: FilterPageProps) => {
  return (
    <Layout title="FilterPage">
      <div className="layout-container">
        <div className="mt-4 grid grid-cols-5 gap-4">
          <div>
            <Heading>Thể loại</Heading>
            <Select className="w-full">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div>
            <Heading>Số lượng chap</Heading>
            <Select className="w-full">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div>
            <Heading>Dành cho</Heading>
            <Select className="w-full">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div>
            <Heading>Tình trạng</Heading>
            <Select className="w-full">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
          <div>
            <Heading>Sắp xếp theo</Heading>
            <Select className="w-full">
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
            </Select>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FilterPage;
