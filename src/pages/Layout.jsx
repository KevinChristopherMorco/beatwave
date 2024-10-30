import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import Header from "../components/partials/Header";
import Tab from "../components/partials/Tab";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" && <Header />}
      <main className="mb-[5rem]">
        <Outlet />
      </main>
      <Tab />
    </>
  );
};

export default Layout;
