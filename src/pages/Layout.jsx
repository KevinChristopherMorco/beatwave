import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/partials/Header";
import Tab from "../components/partials/Tab";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="mb-[5rem]">
        <Outlet />
      </main>
      <Tab />
    </>
  );
};

export default Layout;
