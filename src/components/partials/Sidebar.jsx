import React from "react";
import { Link } from "react-router-dom";
import { RiHeartLine, RiHome8Line } from "@remixicon/react";

const Sidebar = () => {
  return (
    <nav className="col-span-1 p-4 flex flex-col gap-10">
      <p className="font-extrabold text-3xl brand-name">Beatwave</p>
      <ul className="text-xl flex flex-col gap-5 font-medium">
        <li>
          <Link
            to={"/"}
            className="w-fit flex items-center gap-2 cursor-pointer hover:text-[var(--brand-color-400)] transition-colors"
          >
            <RiHome8Line />
            <p>Home</p>
          </Link>
        </li>
        <li className="w-fit flex items-center gap-2 cursor-pointer hover:text-[var(--brand-color-400)] transition-colors">
          <RiHeartLine />
          <p>Favorites</p>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
