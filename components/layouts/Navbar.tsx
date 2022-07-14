import { IconClose } from "components/icons";
import Link from "next/link";
import classNames from "utils/classNames";

const navbarLinks = [
  {
    display: "Tìm truyện",
    path: "/filter",
  },
  {
    display: "Bảng xếp hạng",
    path: "/top-comic",
  },
  {
    display: "Truyện con trai",
    path: "/boy-comic",
  },
  {
    display: "Truyện con gái",
    path: "/girl-comic",
  },
];

interface NavbarProps {
  show: boolean;
  toggleShow: () => void;
}

const Navbar = ({ show, toggleShow }: NavbarProps) => {
  return (
    <nav
      className={classNames(
        "navbar fixed inset-0 md:relative bg-linearGreen transition-all duration-300",
        show ? "show" : ""
      )}
    >
      <div className="layout-container">
        <ul className="flex flex-col pt-11 items-center md:pt-0 md:flex-row gap-x-6">
          <button onClick={toggleShow} className="fixed top-4 right-4 text-white">
            <IconClose />
          </button>
          {navbarLinks.map((link) => (
            <li className="h-12 flex items-center text-white" key={link.path}>
              <Link href={link.path}>
                <a>{link.display}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
