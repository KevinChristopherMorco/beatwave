import React from "react";
import { RiHeartLine, RiPlayFill, RiPlayReverseFill } from "@remixicon/react";

import PlayButton from "../shared/buttons/PlayButton";
import { useMusicContext } from "../../hooks/MusicProvider";

const AudioPlayer = () => {
  const { currentAudio, isPlaying, handlePlayAudio } = useMusicContext();
  console.log(currentAudio);

  return (
    <div className="fixed bottom-0 z-[999] flex flex w-full items-center justify-between bg-[var(--background-color-neutral)] p-3">
      <div className="flex w-[33%] items-center gap-20">
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Taylor_Swift_112_%2818119055110%29.jpg/170px-Taylor_Swift_112_%2818119055110%29.jpg"
            alt=""
            className="h-14 w-14 rounded-md"
          />
          <div>
            <p className="text-lg font-medium">Shake it off</p>
            <p className="text-sm font-light">Taylor Swift</p>
          </div>
        </div>
        <RiHeartLine />
      </div>
      <div className="flex w-[33%] flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <RiPlayReverseFill />
          <PlayButton />
          <RiPlayFill />
        </div>
        <div className="h-1 w-full cursor-pointer bg-gray-600">
          <div className="z-[99] h-full w-20 bg-[var(--brand-color-500)]"></div>
        </div>
      </div>
      <div className="flex w-[33%] flex-col items-center gap-2"></div>
    </div>
  );
};

export default AudioPlayer;
