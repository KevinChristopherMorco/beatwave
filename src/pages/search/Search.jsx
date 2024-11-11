import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "@remixicon/react";

import useMusicApi from "../../hooks/axios/useMusicApi";
import useSearch from "../../hooks/search/useSearch";
import getRandomColor from "../../helpers/getRandomColor";

import BackButton from "../../components/shared/BackButton";
import SearchView from "../../components/search/SearchView";

const Search = () => {
  const { musicData, isLoading, getGenre } = useMusicApi();
  const {
    query,
    musicData: searchData,
    isLoading: isSearchLoading,
    isToggleSearch,
    handleSearchQuery,
    handleSearchToggle,
  } = useSearch();

  useEffect(() => {
    getGenre();
  }, []);

  if (isLoading) return;

  return (
    <section className="flex grow animate-fadeIn flex-col gap-4 p-4">
      <BackButton />
      <div className="flex w-full items-center" onClick={handleSearchToggle}>
        <div className="rounded-l-md bg-white p-2">
          <RiSearch2Line className="h-full text-black" />
        </div>
        <p className="w-full rounded-r-md bg-white p-2 font-medium tracking-wider text-black">
          What do you want to listen to?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {musicData.data.map((x, index) => {
          const randomColor = getRandomColor(index);
          return (
            <div
              className="relative h-[6rem] overflow-hidden rounded-md p-2"
              style={{ backgroundColor: randomColor }}
            >
              <p className="font-medium">{x.name}</p>
              <img
                src={x.picture_xl}
                alt=""
                className="absolute -right-2 bottom-0 h-14 w-14 rotate-45 rounded-lg"
              />
            </div>
          );
        })}
      </div>

      {isToggleSearch && (
        <SearchView
          query={query}
          musicData={searchData}
          isLoading={isSearchLoading}
          setToggleSearch={handleSearchToggle}
          handleSearchQuery={handleSearchQuery}
        />
      )}
    </section>
  );
};

export default Search;
