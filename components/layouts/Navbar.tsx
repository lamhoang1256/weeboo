import Link from "next/link";

const navbarLinks = [
  {
    display: "Tìm truyện",
    path: "/filter",
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

const Navbar = () => {
  return (
    <nav className="bg-linearGreen">
      <div className="layout-container">
        <ul className="flex gap-x-6">
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
