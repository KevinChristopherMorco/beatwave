import React from "react";
import {
  RiDiscLine,
  RiHeartLine,
  RiPlayFill,
  RiPlayReverseFill,
} from "@remixicon/react";

import PlayButton from "../shared/buttons/PlayButton";
import { useMusicContext } from "../../hooks/MusicProvider";

const AudioPlayer = () => {
  const { currentAudio, isPlaying, handlePlayAudio } = useMusicContext();
  const {
    album: { cover_xl } = "",
    artist: { name } = "",
    title,
  } = currentAudio;

  return (
    <div className="fixed bottom-0 z-[999] flex flex w-full items-center justify-between border-t border-t-gray-700 bg-[var(--background-color-neutral)] p-3">
      <div className="flex w-[33%] items-center justify-between pr-20">
        <div className="flex items-center gap-2">
          {cover_xl ? (
            <img src={cover_xl} alt="" className="h-14 w-14 rounded-md" />
          ) : (
            <div className="flex h-14 w-14 items-center justify-center rounded-md bg-gray-500">
              <RiDiscLine className="h-8 w-8" />
            </div>
          )}
          <div>
            <p className="text-lg font-medium">{title}</p>
            <p className="text-sm font-light">{name}</p>
          </div>
        </div>
        {currentAudio && <RiHeartLine />}
      </div>
      <div className="flex w-[33%] flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <RiPlayReverseFill />
          <PlayButton musicData={currentAudio} />
          <RiPlayFill />
        </div>
        {currentAudio && (
          <div className="h-[2px] w-full cursor-pointer bg-gray-600">
            <div className="z-[99] h-full w-20 bg-[var(--brand-color-500)]"></div>
          </div>
        )}
      </div>
      <div className="flex w-[33%] flex-col items-center gap-2"></div>
    </div>
  );
};

export default AudioPlayer;
