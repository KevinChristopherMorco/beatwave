import React from "react";

import formatFanCount from "../../helpers/format/formatFanCount";

import BackButton from "./BackButton";

const PageHeader = ({ musicData, type }) => {
  // const formatFanCount = musicData?.artist?.nb_fan
  //   ?.toLocaleString()
  //   .split(",")
  //   .join(" ");

  const formatFanCounts = formatFanCount(musicData.artist);

  return (
    <>
      {type === "artist" && (
        <div className="relative relative z-[99] flex h-[50vh] w-full flex-col justify-between bg-cover bg-center p-4 xl:h-[50vh]">
          <div className="absolute inset-0 -top-10 h-screen w-full bg-black bg-opacity-20"></div>
          <BackButton />
          <div className="relative flex flex-col gap-2">
            <p className="text-4xl font-extrabold xl:text-7xl">
              {musicData.artist.name}
            </p>
            {musicData.artist.nb_fan > 0 && (
              <p className="text-lg font-medium">{formatFanCounts}</p>
            )}
          </div>
        </div>
      )}

      {type === "podcast" && (
        <div className="relative relative z-[99] flex h-[50vh] w-full flex-col justify-between bg-cover bg-center p-4">
          <div className="absolute inset-0 h-screen w-full bg-black bg-opacity-20"></div>
          <BackButton />
        </div>
      )}

      {type === "album" && (
        <div className="relative relative z-[99] flex h-[50vh] w-full flex-col justify-between bg-cover bg-center p-4">
          <BackButton />
        </div>
      )}
    </>
  );
};

export default PageHeader;
