import React from "react";
import { RiMenu2Fill, RiSearch2Line, RiSunFill } from "@remixicon/react";

const Tab = () => {
  return (
    <nav className="w-full fixed bottom-0 flex p-4 justify-evenly gap-10 items-center -mx-6 bg-black bg-opacity-70">
      <div className="flex flex-col gap-1 justify-center items-center">
        <RiSunFill className="w-6 h-6" />
        <p className="text-[.75rem] font-light">Mode</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <RiSearch2Line className="w-6 h-6" />
        <p className="text-[.75rem] font-light">Search</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        <RiMenu2Fill className="w-6 h-6" />
        <p className="text-[.75rem] font-light">Menu</p>
      </div>
    </nav>
  );
};

export default Tab;
