import React, { useState } from "react";
import { RiHeartLine } from "@remixicon/react";

import PlayButton from "./buttons/PlayButton";

const MusicCard = ({
  index,
  music,
  currentAudio,
  type,
  isPlaying,
  handlePlayAudio,
}) => {
  const [hover, setHover] = useState();

  return (
    <>
      {type === "table-card" ? (
        <tr
          className="cursor-pointer transition-colors hover:bg-[var(--background-color-neutral)]"
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <td className="flex w-[80%] items-center gap-2 py-2">
            <div className="relative h-[4rem] w-[3rem]">
              <img
                src={music.album.cover}
                alt="album cover"
                className=" h-full w-full rounded-md"
              />

              {hover && (
                <PlayButton
                  musicData={music.preview}
                  currentAudio={currentAudio}
                  type={"hover"}
                  isPlaying={isPlaying}
                  handlePlayAudio={handlePlayAudio}
                />
              )}
            </div>
            <div className="flex w-full flex-col">
              <p className="flex w-full gap-2 font-medium">
                {index + 1}. {music.title}
              </p>
            </div>
            <div className="text-gray-600">
              <RiHeartLine className="h-6 w-6 transition-colors hover:text-[var(--brand-color-400)]" />
            </div>
          </td>
          <td className="w-[20%] py-2 font-medium">
            <p className="w-[15rem]  overflow-hidden overflow-ellipsis whitespace-nowrap  ">
              {music.album.title}
            </p>
          </td>
        </tr>
      ) : (
        <div className="flex items-center justify-between">
          <div className="flex w-[65%] items-center gap-2">
            <img
              src={music.album.cover}
              alt="album cover"
              className="h-[4rem] w-[3rem] rounded-md"
            />
            <div className="flex w-full flex-col">
              <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-lg font-medium">
                {music.title}
              </p>
              {music?.contributors && (
                <div className="flex gap-2">
                  {music.contributors.map((contributors, index) => (
                    <p
                      key={index}
                      className="w-fit overflow-hidden overflow-ellipsis whitespace-nowrap font-light text-gray-400"
                    >
                      {contributors.name}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="flex w-[30%] items-center justify-end">
            <PlayButton
              musicData={music.preview}
              isPlaying={isPlaying}
              handlePlayAudio={handlePlayAudio}
              currentAudio={currentAudio}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default MusicCard;
