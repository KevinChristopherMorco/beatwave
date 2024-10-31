import React from "react";
import { Link } from "react-router-dom";
import { RiPlayFill, RiVolumeUpLine } from "@remixicon/react";

const FeaturedCard = ({ musicData, type }) => {
  return (
    <>
      {type === "artists" && (
        <Link
          to={`artist/${musicData.id}`}
          className="shrink-0 px-4 flex flex-col gap-4 items-center cursor-pointer group"
        >
          <div
            className="w-[10rem] h-[10rem] bg-cover bg-center rounded-full border border-gray-800"
            style={{ backgroundImage: `url(${musicData.image})` }}
          ></div>
          <p className="font-medium group-hover:text-[var(--brand-color-400)] transition-colors">
            {musicData.name}
          </p>
        </Link>
      )}
      {type === "tracks" && (
        <div
          style={{
            backgroundImage: `url(${musicData.album.cover_xl})`,
          }}
          className="relative flex flex-col gap-44 w-full h-[20rem] bg-cover bg-center rounded-md p-3"
        >
          <div class="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative flex gap-1">
            <img
              src={musicData.artist.picture_xl}
              alt=""
              className="w-[4rem] h-[4rem] rounded-lg"
            />
            <div className="flex flex-col py-1 px-2">
              <p className="text-lg font-bold">{musicData.title}</p>
              <div className="flex gap-1">
                <p className="font-light">Singer •</p>
                <p className="font-light">{musicData.artist.name}</p>
              </div>
            </div>
          </div>
          <div className="relative flex justify-between items-center">
            <div className="flex items-center gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
              <RiVolumeUpLine className="w-5 h-5" />
              <p className="text-sm font-light">See more tracks</p>
            </div>
            <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
              <RiPlayFill className="w-7 h-7 text-black" />
            </div>
          </div>
        </div>
      )}

      {type === "podcasts" && (
        <Link
          to={`artist/${musicData.id}`}
          className="shrink-0 px-4 flex flex-col gap-4 items-start cursor-pointer group"
        >
          <div
            className="w-[10rem] h-[10rem] bg-cover bg-center rounded-md border border-gray-800"
            style={{ backgroundImage: `url(${musicData.picture_xl})` }}
          ></div>
          <p className="font-medium group-hover:text-[var(--brand-color-400)] transition-colors w-32 overflow-hidden whitespace-nowrap overflow-ellipsis">
            {musicData.title}
          </p>
        </Link>
      )}

      {type === "albums" && (
        <Link
          to={`/album/${musicData.id}`}
          className="shrink-0 px-4 flex flex-col gap-4 items-start cursor-pointer group"
        >
          <div
            className="w-[10rem] h-[10rem] bg-cover bg-center rounded-md border border-gray-800"
            style={{ backgroundImage: `url(${musicData.cover_xl})` }}
          ></div>
          <div className="flex flex-col">
            <p className="font-medium group-hover:text-[var(--brand-color-400)] transition-colors w-40 overflow-hidden whitespace-nowrap overflow-ellipsis">
              {musicData.title}
            </p>
            {musicData.artist?.name && (
              <div className="flex w-[10rem] gap-1 font-light text-gray-400 text-wrap">
                <p>Album • {musicData.artist.name}</p>
              </div>
            )}
          </div>
        </Link>
      )}
    </>
  );
};

export default FeaturedCard;
