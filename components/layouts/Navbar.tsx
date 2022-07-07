import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-linearGreen">
      <div className="layout-container">
        <ul className="flex gap-x-6">
          <li className="h-12 flex items-center text-white">HOT</li>
          <li className="h-12 flex items-center text-white">Theo dõi</li>
          <li className="h-12 flex items-center text-white">Lịch sử</li>
          <li className="h-12 flex items-center text-white">HOT</li>
          <li className="h-12 flex items-center text-white">HOT</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
