import React from "react";

import BackButton from "./BackButton";

const PageHeader = ({ musicData, type }) => {
  const formatFanCount = musicData?.artist?.nb_fan
    ?.toLocaleString()
    .split(",")
    .join(" ");

  return (
    <>
      {type === "artist" && (
        <div className="relative p-4 w-full h-[50vh] xl:h-[75vh] bg-cover bg-center flex flex-col justify-between relative z-[99]">
          <div className="absolute w-full h-screen inset-0 bg-black bg-opacity-20"></div>
          <BackButton />
          <div className="relative">
            <p className="text-4xl font-extrabold">{musicData.artist.name}</p>
            {musicData.artist.nb_fan > 0 && (
              <p className="text-lg font-medium">
                {musicData.artist.nb_fan > 1
                  ? `${formatFanCount} fans`
                  : `${formatFanCount} fan`}
              </p>
            )}
          </div>
        </div>
      )}

      {type === "podcast" && (
        <div className="relative p-4 w-full h-[50vh] bg-cover bg-center flex flex-col justify-between relative z-[99]">
          <div className="absolute w-full h-screen inset-0 bg-black bg-opacity-20"></div>
          <BackButton />
        </div>
      )}

      {type === "album" && (
        <div className="relative p-4 w-full h-[50vh] bg-cover bg-center flex flex-col justify-between relative z-[99]">
          <BackButton />
        </div>
      )}
    </>
  );
};

export default PageHeader;
