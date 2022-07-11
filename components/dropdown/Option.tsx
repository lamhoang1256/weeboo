interface OptionProps {
  value: string;
  children: React.ReactNode;
  selected?: boolean;
}

const Option = ({ value, children, selected, ...props }: OptionProps) => {
  return (
    <option value={value} {...props} selected={selected}>
      {children}
    </option>
  );
};

export default Option;
