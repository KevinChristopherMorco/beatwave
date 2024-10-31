import { RiPlayFill } from "@remixicon/react";
import React from "react";

const MusicCard = ({ music }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="w-[65%] flex items-center gap-2">
        <img
          src={music.album.cover}
          alt=""
          className="w-[3rem] h-[4rem] rounded-md"
        />
        <div className="w-full flex flex-col">
          <p className="font-medium w-full overflow-hidden whitespace-nowrap overflow-ellipsis text-lg">
            {music.title}
          </p>
          {music?.contributors ? (
            <div className="flex gap-2">
              {music.contributors.map((contributors, index) => {
                return (
                  <p
                    key={index}
                    className="w-fit font-light text-gray-400 w-full overflow-hidden whitespace-nowrap overflow-ellipsis"
                  >
                    {contributors.name}
                  </p>
                );
              })}
            </div>
          ) : (
            <p className="w-fit font-light text-gray-400 w-full overflow-hidden whitespace-nowrap overflow-ellipsis">
              {music.artist.name}
            </p>
          )}
        </div>
      </div>
      <div className="w-[30%] flex items-center justify-end">
        <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
          <RiPlayFill className="text-black w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
