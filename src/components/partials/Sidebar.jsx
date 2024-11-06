import React from "react";
import { Link, useLocation } from "react-router-dom";
import { RiHeartLine, RiHome8Line } from "@remixicon/react";

const Sidebar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="sticky top-0 z-[999] col-span-1 flex h-screen w-full flex-col gap-10 border-r border-gray-700 bg-[var(--background-color-neutral)] p-4">
      <p className="brand-name text-3xl font-extrabold">Beatwave</p>
      <ul className="flex flex-col gap-5 text-xl font-medium">
        <li
          className={`${pathname === "/" ? "text-[var(--brand-color-500)]" : ""} font-bold `}
        >
          <Link
            to={"/"}
            className={`flex w-fit cursor-pointer items-center gap-2 transition-colors hover:text-[var(--brand-color-400)]`}
          >
            <RiHome8Line />
            <p>Home</p>
          </Link>
        </li>
        <li
          className={`${pathname === "/favorites" ? "font-bold text-[var(--brand-color-500)]" : ""} font-bold `}
        >
          <Link
            to={"/favorites"}
            className={`flex w-fit cursor-pointer items-center gap-2 transition-colors hover:text-[var(--brand-color-400)]`}
          >
            <RiHeartLine />
            <p>Favorites</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
