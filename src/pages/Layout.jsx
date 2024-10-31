import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/partials/Header";
import Tab from "../components/partials/Tab";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <Header />}
      <main className="flex flex-col mb-[5rem] grow">
        <Outlet />
      </main>
      <Tab />
    </>
  );
};

export default Layout;
