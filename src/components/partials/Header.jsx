import React from "react";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h1 className="font-medium text-2xl tracking-tight">Good Morning</h1>
      </div>
      <div className="flex gap-3 items-center">
        {/* <RiSunFill className="w-5 h-5" />
        <RiMenu2Fill className="w-5 h-5" /> */}
      </div>
    </nav>
  );
};

export default Header;
