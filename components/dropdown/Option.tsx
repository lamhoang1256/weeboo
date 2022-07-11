interface OptionProps {
  value: string;
  children: React.ReactNode;
  selected?: boolean;
  handleChange?: (e?: any) => void;
}

const Option = ({ value, children, selected, handleChange, ...props }: OptionProps) => {
  return (
    <option value={value} {...props} selected={selected} onChange={handleChange}>
      {children}
    </option>
  );
};

export default Option;
