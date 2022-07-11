import classNames from "utils/classNames";

interface SelectProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  handleChange?: (e?: any) => void;
}

const Select = ({ id = "", className = "", children, handleChange = (e) => {} }: SelectProps) => {
  const stylesSelect =
    "h-11 pr-4 pl-2 text-sm md:text-base md:pr-[30px] md:pl-[16px] rounded bg-[#ebebeb] scrollbar";
  return (
    <select
      id={id}
      className={classNames(stylesSelect, className)}
      onChange={(e) => handleChange(e.target.value)}
    >
      {children}
    </select>
  );
};

export default Select;
