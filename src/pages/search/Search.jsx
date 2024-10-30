import React from "react";
import { RiSearch2Line } from "@remixicon/react";

import BackButton from "../../components/shared/BackButton";

const Search = () => {
  return (
    <section className="p-6 flex flex-col gap-4 animate-fadeIn">
      <BackButton />
      <div className="w-full flex items-center">
        <div className="bg-white p-2 rounded-l-md">
          <RiSearch2Line className="text-black h-full" />
        </div>
        <p className="p-2 w-full bg-white text-black font-medium tracking-wider rounded-r-md">
          What do you want to listen to?
        </p>
      </div>
    </section>
  );
};

export default Search;
