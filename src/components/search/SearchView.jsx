import React, { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiSearch2Fill,
  RiVerifiedBadgeFill,
} from "@remixicon/react";

import useMusicApi from "../../hooks/axios/useMusicApi";
import useSearch from "../../hooks/search/useSearch";

import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";

const SearchView = ({ setToggleSearch }) => {
  const { query, musicData, isLoading, artistResult, handleSearchQuery } =
    useSearch();

  if (isLoading) return;

  // const artistResult = musicData?.data?.filter((item, index, arr) => {
  //   return (
  //     arr.findIndex((existing) => existing.artist.id === item.artist.id) ===
  //     index
  //   );
  // });

  const PromptSearch = () => {
    if (query.length > 0 && musicData?.data?.length === 0) {
      return (
        <div className="flex h-[60vh] items-center justify-center p-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <RiSearch2Fill className="h-8 w-8" />
            <p className="text-2xl font-medium">No Results Found!</p>
            <p className="text-sm font-medium text-gray-400">
              It looks like we couldn't find anything matching your search.
            </p>
          </div>
        </div>
      );
    }

    if (query.length === 0) {
      return (
        <div className="flex h-[60vh] items-center justify-center p-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <RiSearch2Fill className="h-8 w-8" />
            <p className="text-xl font-medium">
              Discover Your Next Favorite Tune!
            </p>
            <p className="text-sm font-medium text-gray-400">
              Share it, and let’s find some amazing artists and songs together!{" "}
            </p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="fixed left-0 top-0 z-[999] h-screen w-full grow bg-[var(--background-color)]">
      <div className="flex items-center bg-[var(--background-color-neutral)] px-3">
        <div
          className="bg-[var(--background-color-neutral)]"
          onClick={() => setToggleSearch(false)}
        >
          <RiArrowLeftLine className="h-6 w-6" />
        </div>
        <input
          type="text"
          className="w-full bg-[var(--background-color-neutral)] p-4 outline-none"
          placeholder="What do you want to listen to?"
          onChange={handleSearchQuery}
        />
      </div>
      {musicData?.data?.length > 0 && !isLoading ? (
        <div className="flex h-screen w-full flex-col gap-4 overflow-y-scroll p-4 pb-[13rem]">
          {artistResult.slice(0, 3).map((artist, index) => {
            return (
              <Link
                to={`/artist/${artist.artist.id}`}
                key={index}
                className="flex w-full items-center gap-2"
              >
                <img
                  src={artist?.artist?.picture_xl}
                  alt=""
                  className="h-[3.5rem] w-[3.5rem] rounded-full"
                />

                <div className="flex w-full flex-col py-1">
                  <div className="flex items-center gap-2">
                    <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
                      {artist?.artist?.name}
                    </p>
                    <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
                  </div>

                  <div className="flex gap-1 text-sm font-light text-gray-400">
                    <p>Artist</p>
                  </div>
                </div>
              </Link>
            );
          })}

          {musicData?.data?.map((music, index) => {
            return <SearchCard key={index} musicData={music} />;
          })}
        </div>
      ) : (
        PromptSearch()
      )}
    </div>
  );
};

export default SearchView;
