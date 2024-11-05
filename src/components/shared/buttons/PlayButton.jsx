import React from "react";
import { RiPauseFill, RiPlayFill } from "@remixicon/react";

const PlayButton = ({
  musicData,
  currentAudio,
  type,
  isPlaying,
  handlePlayAudio,
}) => {
  const isCurrentAudio = currentAudio === musicData;

  return (
    <>
      {type === "hover" ? (
        <div className="absolute left-[50%] top-[50%] flex h-8 w-8 -translate-x-[50%] -translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-[var(--brand-color-500)]">
          {isCurrentAudio && isPlaying ? (
            <RiPauseFill
              className="h-6 w-6 text-white lg:h-7 lg:w-7"
              onClick={() => handlePlayAudio(musicData)}
            />
          ) : (
            <RiPlayFill
              className="h-6 w-6 text-white lg:h-7 lg:w-7"
              onClick={() => handlePlayAudio(musicData)}
            />
          )}
        </div>
      ) : (
        <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white lg:h-12 lg:w-12">
          {isCurrentAudio && isPlaying ? (
            <RiPauseFill
              className="h-6 w-6 text-black lg:h-7 lg:w-7"
              onClick={() => handlePlayAudio(musicData)}
            />
          ) : (
            <RiPlayFill
              className="h-6 w-6 text-black lg:h-7 lg:w-7"
              onClick={() => handlePlayAudio(musicData)}
            />
          )}
        </div>
      )}
    </>
  );
};

export default PlayButton;
