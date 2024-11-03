import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import useScreenResponsiveness from "../hooks/useScreenResponsiveness";

import Header from "../components/partials/Header";
import Tab from "../components/partials/Tab";
import Sidebar from "../components/partials/Sidebar";

const Layout = () => {
  const { pathname } = useLocation();
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();
  return (
    <>
      {pathname === "/" && (sm || md) && <Header />}
      <main className="flex flex-col mb-[5rem] grow lg:w-full lg:grid lg:grid-cols-[1fr_4fr]">
        {(lg || xl || xxl) && <Sidebar />}
        <Outlet />
      </main>
      {(sm || md) && <Tab />}
    </>
  );
};

export default Layout;
