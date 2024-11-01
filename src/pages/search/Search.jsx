import React, { useEffect, useState } from "react";
import { RiSearch2Line } from "@remixicon/react";

import useMusicApi from "../../hooks/axios/useMusicApi";
import getRandomColor from "../../helpers/getRandomColor";

import BackButton from "../../components/shared/BackButton";
import SearchView from "../../components/search/SearchView";

const Search = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { musicData, isLoading, getGenre } = useMusicApi();

  useEffect(() => {
    getGenre();
  }, []);

  if (isLoading) return;

  return (
    <section className="p-4 flex flex-col gap-4 animate-fadeIn grow">
      <BackButton />
      <div
        className="w-full flex items-center"
        onClick={() => setToggleSearch(true)}
      >
        <div className="bg-white p-2 rounded-l-md">
          <RiSearch2Line className="text-black h-full" />
        </div>
        <p className="p-2 w-full bg-white text-black font-medium tracking-wider rounded-r-md">
          What do you want to listen to?
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-6 gap-x-4">
        {musicData.data.map((x, index) => {
          const randomColor = getRandomColor(index);
          return (
            <div
              className="p-2 h-[6rem] rounded-md relative overflow-hidden"
              style={{ backgroundColor: randomColor }}
            >
              <p className="font-medium">{x.name}</p>
              <img
                src={x.picture_xl}
                alt=""
                className="absolute bottom-0 -right-2 h-14 w-14 rotate-45 rounded-lg"
              />
            </div>
          );
        })}
      </div>

      {toggleSearch && <SearchView setToggleSearch={setToggleSearch} />}
    </section>
  );
};

export default Search;
