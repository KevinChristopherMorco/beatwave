import React from "react";

import BackButton from "../shared/BackButton";

const ArtistHeader = ({ musicData }) => {
  const formatFanCount = musicData.artist.nb_fan
    .toLocaleString()
    .split(",")
    .join(" ");

  return (
    <div className="relative p-4 w-full h-[50vh] bg-cover bg-center flex flex-col justify-between relative z-[99]">
      {/* <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div> */}
      <BackButton />
      <div className="">
        <p className="text-4xl font-extrabold">{musicData.artist.name}</p>
        {musicData.artist.nb_fan && (
          <p className="text-lg font-medium">
            {formatFanCount > 1
              ? `${formatFanCount} fans`
              : `${formatFanCount} fan`}
            fans
          </p>
        )}
      </div>
    </div>
  );
};

export default ArtistHeader;
