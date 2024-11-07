import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import useScreenResponsiveness from "../hooks/useScreenResponsiveness";
import useMusicApi from "../hooks/axios/useMusicApi";
import formatFanCount from "../helpers/format/formatFanCount";

import AccountHeader from "../components/partials/AccountHeader";
import Header from "../components/partials/Header";
import Sidebar from "../components/partials/Sidebar";
import Tab from "../components/partials/Tab";
import AudioPlayer from "../components/track/AudioPlayer";
import TabList from "../components/shared/buttons/TabList";
import useSearch from "../hooks/search/useSearch";
import { RiVerifiedBadgeFill } from "@remixicon/react";
import Line from "../components/loaders/Line";

const Layout = () => {
  const { pathname } = useLocation();
  const [toggleSearch, setToggleSearch] = useState(false);
  const {
    query,
    musicData: { artist } = [],
    isLoading,
    artistResult,
    handleSearchQuery,
  } = useSearch();

  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();

  const isLargeScreen = lg || xl || xxl;
  const isSmallScreen = sm || md;

  const SearchView = () => {
    if (isLoading) return <Line />;

    return (
      <div className="z-[999] flex h-full w-full grow flex-col bg-[var(--background-color)] px-4 py-6">
        <TabList type={"search"} />
        {query.length > 0 && (
          <div>
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">Artist</p>
              <div className="flex">
                {artist?.data.slice(0, 1).map((artist, index) => {
                  const formatFanCounts = formatFanCount(artist);

                  return (
                    <Link
                      to={`/artist/${artist.id}`}
                      key={index}
                      className="flex w-full items-center gap-2"
                    >
                      <img
                        src={artist.picture_xl}
                        alt=""
                        className="h-[10rem] w-[10rem] rounded-full"
                      />

                      <div className="flex w-full flex-col gap-3 py-1">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
                              {artist.name}
                            </p>
                            <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
                          </div>
                          <div className="flex gap-1 text-sm font-light text-gray-400">
                            <p>{formatFanCounts}</p>
                          </div>
                        </div>
                        <div className="flex w-fit gap-1 rounded-md bg-gray-400 px-1 text-sm font-light text-black">
                          <p>Artist</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

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
            {query.length > 0 && SearchView()}
          </div>
        </>
      )}

      <main className="mb-[5rem] flex grow flex-col lg:col-start-2">
        <Outlet />
      </main>
      {isSmallScreen && <Tab />}
      {isLargeScreen && <AudioPlayer />}
    </>
  );
};

export default Layout;
