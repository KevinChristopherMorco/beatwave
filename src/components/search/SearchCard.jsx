import React from "react";

const SearchCard = ({ musicData }) => {
  console.log(musicData);
  return (
    <>
      {musicData?.type === "track" || musicData?.type === "album" ? (
        <div className="flex w-full gap-2">
          <img
            src={musicData.cover_xl || musicData.album.cover_xl}
            alt=""
            className="h-[3.5rem] w-[3.5rem] rounded"
          />
          <div className="flex w-full flex-col py-1">
            <p className="w-[75%] overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
              {musicData?.title}
            </p>
            <div className="flex gap-1 text-sm font-light text-gray-400">
              <p>{musicData?.type === "track" ? "Song" : "Album"}</p>
              <p>•</p>
              <p>{musicData?.artist?.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <Link
          to={`/artist/${musicData?.artist?.id}`}
          key={index}
          className="flex w-full items-center gap-2"
        >
          <img
            src={musicData?.artist?.picture_xl}
            alt=""
            className="h-[3.5rem] w-[3.5rem] rounded-full"
          />

          <div className="flex w-full flex-col py-1">
            <div className="flex items-center gap-2">
              <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
                {musicData?.artist?.name}
              </p>
              <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
            </div>

            <div className="flex gap-1 text-sm font-light text-gray-400">
              <p>Artist</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default SearchCard;
