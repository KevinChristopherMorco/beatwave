import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiPlayFill, RiVolumeUpLine } from "@remixicon/react";

import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import useMusicApi from "../../hooks/axios/useMusicApi";

const FeaturedCard = ({ musicData, type, handlePlayAudio }) => {
  const navigate = useNavigate();
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();
  const handleLinkClick = () => {
    // Change the URL without reloading the page
    navigate(`/artist/${musicData.id}`);
  };

  return (
    <>
      {type === "artists" && (
        <div
          onClick={handleLinkClick}
          className="group flex shrink-0 cursor-pointer flex-col items-center gap-4 px-4 lg:px-0"
        >
          <div
            className="h-[10rem] w-[10rem] rounded-full border border-gray-800 bg-cover bg-center xl:h-[14rem] xl:w-[14rem]"
            style={{
              backgroundImage: `url(${
                musicData.image || musicData.picture_xl
              })`,
            }}
          ></div>
          <div>
            <p className="font-medium transition-colors group-hover:text-[var(--brand-color-400)] xl:text-lg">
              {musicData.name}
            </p>
          </div>
        </div>
      )}
      {type === "tracks" && (
        <div
          style={{
            backgroundImage: `url(${musicData.album.cover_xl})`,
          }}
          className="relative flex h-[20rem] w-full flex-col gap-44 rounded-md bg-cover bg-center p-3"
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>

          <div className="relative flex gap-1">
            <Link
              to={`/artist/${musicData.artist.id}`}
              className="cursor-pointer"
            >
              <img
                src={musicData.artist.picture_xl}
                alt=""
                className="h-[4rem] w-[4rem] rounded-lg"
              />
            </Link>
            <div className="flex flex-col px-2 py-1">
              <p className="text-lg font-bold">{musicData.title}</p>
              <div className="flex gap-1">
                <p className="font-light">Singer •</p>
                <Link
                  to={`/artist/${musicData.artist.id}`}
                  className="cursor-pointer font-light transition-colors hover:text-[var(--brand-color-500)]"
                >
                  {musicData.artist.name}
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute bottom-4 left-0 flex w-full items-center justify-between px-4">
            <div className="flex items-center gap-2 rounded-full bg-black bg-opacity-50 px-4 py-2">
              <RiVolumeUpLine className="h-5 w-5" />
              <p className="text-sm font-light">See more tracks</p>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
              <RiPlayFill
                className="h-7 w-7 text-black"
                onClick={() => handlePlayAudio(musicData.preview)}
              />
            </div>
          </div>
        </div>
      )}

      {type === "podcasts" && (
        <Link
          to={`/podcast/${musicData.id}`}
          className="group flex shrink-0 cursor-pointer flex-col items-start gap-4 px-4"
        >
          <div
            className="h-[10rem] w-[10rem] rounded-md border border-gray-800 bg-cover bg-center xl:h-[14rem] xl:w-[14rem]"
            style={{ backgroundImage: `url(${musicData.picture_xl})` }}
          ></div>
          <p className="w-32 overflow-hidden overflow-ellipsis whitespace-nowrap font-medium transition-colors group-hover:text-[var(--brand-color-400)] xl:w-48">
            {musicData.title}
          </p>
        </Link>
      )}

      {type === "albums" && (
        <Link
          to={`/album/${musicData.id}`}
          className="group flex shrink-0 cursor-pointer flex-col items-start gap-4 px-4"
        >
          <div
            className="h-[10rem] w-[10rem] rounded-md border border-gray-800 bg-cover bg-center xl:h-[14rem] xl:w-[14rem]"
            style={{ backgroundImage: `url(${musicData.cover_xl})` }}
          ></div>
          <div className="flex flex-col">
            <p className="w-40 overflow-hidden overflow-ellipsis whitespace-nowrap font-medium transition-colors group-hover:text-[var(--brand-color-400)]">
              {musicData.title}
            </p>
            {musicData.artist?.name && (
              <div className="flex w-[10rem] gap-1 text-wrap font-light text-gray-400">
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
