import Link from "next/link";
import classNames from "utils/classNames";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  handleOnClick?: () => void;
  to?: string;
  children: React.ReactNode;
}

const Button = ({
  to = "",
  type = "button",
  className = "",
  handleOnClick = () => {},
  children,
  ...props
}: ButtonProps) => {
  const stylesButton = "px-[30px] h-11 bg-[#ccc] rounded-md text-white";
  if (to) {
    return (
      <Link href={to}>
        <button
          type={type}
          className={classNames(stylesButton, className)}
          onClick={() => handleOnClick()}
          {...props}
        >
          {children}
        </button>
      </Link>
    );
  }
  return (
    <button
      type={type}
      className={classNames(stylesButton, className)}
      onClick={() => handleOnClick()}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
