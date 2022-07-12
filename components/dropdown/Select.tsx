import classNames from "utils/classNames";

interface SelectProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  onChange?: (e?: any) => void;
  defaultValue?: string;
}

const Select = ({
  id = "",
  children,
  className = "",
  defaultValue = "",
  onChange = (e) => {},
}: SelectProps) => {
  const stylesSelect =
    "h-11 pr-4 pl-2 text-sm md:text-base md:pr-[30px] md:pl-[16px] rounded bg-[#ebebeb] scrollbar";
  return (
    <select
      id={id}
      defaultValue={defaultValue}
      onChange={onChange}
      className={classNames(stylesSelect, className)}
    >
      {children}
    </select>
  );
};

export default Select;
