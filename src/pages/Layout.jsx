import React from "react";
import { Outlet } from "react-router-dom";

import useScreenResponsiveness from "../hooks/useScreenResponsiveness";
import useSearch from "../hooks/search/useSearch";

import AccountHeader from "../components/partials/AccountHeader";
import Sidebar from "../components/partials/Sidebar";
import Tab from "../components/partials/Tab";
import SearchView from "../components/search/SearchView";
import AudioPlayer from "../components/track/AudioPlayer";

const Layout = () => {
  const { query, musicData, isLoading, handleSearchQuery } = useSearch();

  const {
    screenSize: { sm, md, lg, xl, xxl },
    isLargeScreen,
    isSmallScreen,
  } = useScreenResponsiveness();

  return (
    <>
      {isLargeScreen && (
        <>
          <Sidebar />
          <div
            className={`${query.length > 0 ? "h-screen" : ""} sticky top-0 z-[999] flex w-full flex-col`}
          >
            {isLargeScreen && (
              <AccountHeader handleInputChange={handleSearchQuery} />
            )}
            {query.length > 0 && (
              <SearchView
                query={query}
                musicData={musicData}
                isLoading={isLoading}
              />
            )}
          </div>
          <AudioPlayer />
        </>
      )}

      {isSmallScreen && <Tab />}

      <main className="mb-[5rem] flex grow flex-col lg:col-start-2">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
