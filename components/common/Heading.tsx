import classNames from "utils/classNames";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

const Heading = ({ children, className = "" }: HeadingProps) => {
  const stylesHeading = "py-3 font-bold color-[#333] text-xl";
  return <h2 className={classNames(stylesHeading, className)}>{children}</h2>;
};

export default Heading;
