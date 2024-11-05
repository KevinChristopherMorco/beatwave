import React from "react";
import { RiPauseFill, RiPlayFill } from "@remixicon/react";

const PlayButton = ({
  musicData,
  currentAudio,
  isPlaying,
  handlePlayAudio,
}) => {
  const isCurrentAudio = currentAudio === musicData;

  const handle = () => {
    handlePlayAudio(musicData);
  };

  return (
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
  );
};

export default PlayButton;
