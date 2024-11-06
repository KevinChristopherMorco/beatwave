import React from "react";
import { Outlet, useLocation } from "react-router-dom";

import useScreenResponsiveness from "../hooks/useScreenResponsiveness";

import AccountHeader from "../components/partials/AccountHeader";
import Header from "../components/partials/Header";
import Sidebar from "../components/partials/Sidebar";
import Tab from "../components/partials/Tab";
import AudioPlayer from "../components/track/AudioPlayer";

const Layout = () => {
  const { pathname } = useLocation();
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();
  return (
    <>
      {pathname === "/" && (sm || md) && <Header />}
      {(lg || xl || xxl) && <AccountHeader />}
      <div className="fixed z-[999] h-screen bg-red-500"></div>

      <main className="mb-[5rem] flex grow flex-col lg:relative lg:mb-0 lg:grid lg:w-full lg:grid-cols-[1fr_3fr] xl:grid-cols-[1fr_5fr]">
        {(lg || xl || xxl) && <Sidebar />}

        <Outlet />
      </main>
      <AudioPlayer />
      {(sm || md) && <Tab />}
    </>
  );
};

export default Layout;
