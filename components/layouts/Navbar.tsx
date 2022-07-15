import { IconClose } from "components/icons";
import { SearchBar } from "components/search";
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
        "navbar fixed z-10 inset-0 md:relative bg-[#141414] md:bg-linearGreen transition-all duration-300",
        show ? "show" : ""
      )}
    >
      <div className="layout-container">
        <SearchBar
          className="max-w-[300px] mx-auto h-[40px] mt-16 md:mt-0 flex md:hidden"
          show={show}
          toggleShow={toggleShow}
        />
        <ul className="flex flex-col mt-4 md:mt-0 items-center md:pt-0 md:flex-row gap-x-6">
          <button onClick={toggleShow} className="fixed top-4 right-4 text-white">
            <IconClose />
          </button>
          {navbarLinks.map((link) => (
            <li className="h-12 flex items-center text-white" key={link.path}>
              <Link href={link.path}>
                <a onClick={toggleShow}>{link.display}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
