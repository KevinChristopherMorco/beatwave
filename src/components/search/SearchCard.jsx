import React from "react";

const SearchCard = ({ musicData }) => {
  return (
    <>
      {musicData?.type === "track" && (
        <div className="w-full flex gap-2">
          <img
            src={musicData.album.cover_xl}
            alt=""
            className="w-[3.5rem] h-[3.5rem] rounded"
          />
          <div className="py-1 flex flex-col w-full">
            <p className="font-medium w-[75%] overflow-hidden whitespace-nowrap overflow-ellipsis">
              {musicData?.title}
            </p>
            <div className="text-gray-400 flex gap-1 font-light text-sm">
              <p>{musicData?.type === "track" ? "Song" : musicData?.type}</p>
              <p>•</p>
              <p>{musicData?.artist?.name}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchCard;
