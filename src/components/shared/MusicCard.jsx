import { RiPlayFill } from "@remixicon/react";
import React from "react";

const MusicCard = ({ music, handlePlayAudio }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex w-[65%] items-center gap-2">
        <img
          src={music.album.cover}
          alt=""
          className="h-[4rem] w-[3rem] rounded-md"
        />
        <div className="flex w-full flex-col">
          <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-medium">
            {music.title}
          </p>
          {music?.contributors ? (
            <div className="flex gap-2">
              {music.contributors.map((contributors, index) => {
                return (
                  <p
                    key={index}
                    className="w-fit overflow-hidden overflow-ellipsis  whitespace-nowrap font-light text-gray-400"
                  >
                    {contributors.name}
                  </p>
                );
              })}
            </div>
          ) : (
            <p className="w-fit overflow-hidden overflow-ellipsis  whitespace-nowrap font-light text-gray-400">
              {music.artist.name}
            </p>
          )}
        </div>
      </div>
      <div className="flex w-[30%] items-center justify-end">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
          <RiPlayFill
            className="h-5 w-5 text-black"
            onClick={() => handlePlayAudio(music.preview)}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
