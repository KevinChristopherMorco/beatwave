import React from "react";
import PlayButton from "./buttons/PlayButton";

const MusicCard = ({ music, currentAudio, isPlaying, handlePlayAudio }) => {
  return (
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
  );
};

export default MusicCard;
