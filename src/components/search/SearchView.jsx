import React, { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiSearch2Fill,
  RiVerifiedBadgeFill,
} from "@remixicon/react";

import useMusicApi from "../../hooks/axios/useMusicApi";

import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";

const SearchView = ({ setToggleSearch }) => {
  const { musicData, isLoading, getSearchResults } = useMusicApi();
  const [query, setQuery] = useState(" ");

  const handleSearchQuery = (event) => {
    const { value } = event.target;
    setQuery(value);
  };
  useEffect(() => {
    const delaySearch = setTimeout(() => {
      getSearchResults(query);
    }, 100);

    return () => clearTimeout(delaySearch);
  }, [query]);

  if (isLoading) return;

  const artistResult = musicData?.data?.filter((item, index, arr) => {
    return (
      arr.findIndex((existing) => existing.artist.id === item.artist.id) ===
      index
    );
  });

  const PromptSearch = () => {
    if (query.length > 0 && musicData?.data?.length === 0) {
      return (
        <div className="h-[60vh] flex items-center justify-center p-4">
          <div className="flex flex-col items-center text-center gap-1">
            <RiSearch2Fill className="w-8 h-8" />
            <p className="text-2xl font-medium">No Results Found!</p>
            <p className="text-sm text-gray-400 font-medium">
              It looks like we couldn't find anything matching your search.
            </p>
          </div>
        </div>
      );
    }

    if (query.length === 0) {
      return (
        <div className="h-[60vh] flex items-center justify-center p-4">
          <div className="flex flex-col items-center text-center gap-1">
            <RiSearch2Fill className="w-8 h-8" />
            <p className="text-xl font-medium">
              Discover Your Next Favorite Tune!
            </p>
            <p className="text-sm text-gray-400 font-medium">
              Share it, and let’s find some amazing artists and songs together!{" "}
            </p>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="grow left-0 top-0 fixed z-[999] w-full h-screen bg-[var(--background-color)]">
      <div className="flex items-center bg-[var(--background-color-neutral)] px-3">
        <div
          className="bg-[var(--background-color-neutral)]"
          onClick={() => setToggleSearch(false)}
        >
          <RiArrowLeftLine className="w-6 h-6" />
        </div>
        <input
          type="text"
          className="p-4 w-full bg-[var(--background-color-neutral)] outline-none"
          placeholder="What do you want to listen to?"
          onChange={handleSearchQuery}
        />
      </div>
      {musicData?.data?.length > 0 && !isLoading ? (
        <div className="p-4 flex flex-col gap-4 w-full overflow-y-scroll h-screen pb-[13rem]">
          {artistResult.slice(0, 3).map((artist, index) => {
            return (
              <Link
                to={`/artist/${artist.artist.id}`}
                key={index}
                className="w-full items-center flex gap-2"
              >
                <img
                  src={artist?.artist?.picture_xl}
                  alt=""
                  className="w-[3.5rem] h-[3.5rem] rounded-full"
                />

                <div className="py-1 flex flex-col w-full">
                  <div className="flex items-center gap-2">
                    <p className="font-medium overflow-hidden whitespace-nowrap overflow-ellipsis">
                      {artist?.artist?.name}
                    </p>
                    <RiVerifiedBadgeFill className="w-4 h-4 text-[#1C9CEA]" />
                  </div>

                  <div className="text-gray-400 flex gap-1 font-light text-sm">
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
