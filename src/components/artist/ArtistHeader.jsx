import React from "react";

import BackButton from "../shared/BackButton";

const ArtistHeader = ({ musicData }) => {
  return (
    <div
      className="p-4 w-full h-[30vh] bg-cover bg-center flex flex-col justify-between relative"
      style={{ backgroundImage: `url(${musicData.picture_xl})` }}
    >
      <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div>
      <BackButton />
      <div className="relative">
        <p className="text-4xl font-bold">{musicData.name}</p>
      </div>
    </div>
  );
};

export default ArtistHeader;
