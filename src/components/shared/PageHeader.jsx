import React from "react";

import BackButton from "./BackButton";

const PageHeader = ({ musicData, type }) => {
  return (
    <>
      {type === "artist" && (
        <div className="relative p-4 w-full h-[50vh] bg-cover bg-center flex flex-col justify-between relative z-[99]">
          {/* <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div> */}
          <BackButton />
          <div className="">
            <p className="text-4xl font-extrabold">{musicData.artist.name}</p>
            <p className="text-lg font-medium">
              {musicData.artist.nb_fan.toLocaleString().split(",").join(" ")}{" "}
              fans
            </p>
          </div>
        </div>
      )}

      {type === "album" && (
        <div className="relative p-4 w-full h-[50vh] bg-cover bg-center flex flex-col justify-between relative z-[99]">
          {/* <div className="absolute w-full h-full inset-0 bg-black bg-opacity-20"></div> */}
          <BackButton />
          {/* <div className="">
            <p className="text-4xl font-extrabold">{musicData.title}</p>
          </div> */}
        </div>
      )}
    </>
  );
};

export default PageHeader;
