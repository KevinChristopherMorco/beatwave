import React, { useEffect, useState } from "react";
import {
  RiArrowLeftLine,
  RiSearch2Fill,
  RiVerifiedBadgeFill,
} from "@remixicon/react";

import useMusicApi from "../../hooks/axios/useMusicApi";
import useSearch from "../../hooks/search/useSearch";

import SearchCard from "./SearchCard";
import { Link } from "react-router-dom";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import TabList from "../shared/buttons/TabList";
import formatFanCount from "../../helpers/format/formatFanCount";
import MusicCard from "../shared/MusicCard";
import FeaturedCard from "../shared/FeaturedCard";
import Line from "../loaders/Line";

const SearchView = ({
  query,
  musicData,
  isLoading,
  setToggleSearch,
  handleSearchQuery,
}) => {
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();

  const isSmallScreen = sm || md;
  const isLargeScreen = lg || xl || xxl;

  console.log(musicData);

  const PromptSearch = () => {
    if (query.length > 0 && musicData?.data?.length === 0) {
      return (
        <div className="flex h-[60vh] items-center justify-center p-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <RiSearch2Fill className="h-8 w-8" />
            <p className="text-2xl font-medium">No Results Found!</p>
            <p className="text-sm font-medium text-gray-400">
              It looks like we couldn't find anything matching your search.
            </p>
          </div>
        </div>
      );
    }

    if (query.length === 0) {
      return (
        <div className="flex h-[60vh] items-center justify-center p-4">
          <div className="flex flex-col items-center gap-1 text-center">
            <RiSearch2Fill className="h-8 w-8" />
            <p className="text-xl font-medium">
              Discover Your Next Favorite Tune!
            </p>
            <p className="text-sm font-medium text-gray-400">
              Share it, and let’s find some amazing artists and songs together!{" "}
            </p>
          </div>
        </div>
      );
    }
  };

  const searchViewLarge = () => {
    if (isLoading) return <Line />;

    const { artist, albums, tracks, podcasts, similarArtist } = musicData;

    return (
      <div className="z-[999] flex h-full w-full grow flex-col bg-[var(--background-color)] px-4 py-6">
        <TabList type={"search"} />
        {query.length > 0 && (
          <div className="flex h-[30rem] flex-col gap-10 overflow-y-scroll">
            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">Artist</p>
              <div className="flex">
                {artist?.data.slice(0, 1).map((artist, index) => {
                  const formatFanCounts = formatFanCount(artist);

                  return (
                    <Link
                      to={`/artist/${artist.id}`}
                      key={index}
                      className="flex w-full items-center gap-2"
                    >
                      <img
                        src={artist.picture_xl}
                        alt=""
                        className="h-[10rem] w-[10rem] rounded-full"
                      />

                      <div className="flex w-full flex-col gap-3 py-1">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2">
                            <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
                              {artist.name}
                            </p>
                            <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
                          </div>
                          <div className="flex gap-1 text-sm font-light text-gray-400">
                            <p>{formatFanCounts}</p>
                          </div>
                        </div>
                        <div className="flex w-fit gap-1 rounded-md bg-gray-400 px-1 text-sm font-light text-black">
                          <p>Artist</p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-10">
              <p className="text-xl font-bold">Tracks</p>
              <table className="w-full">
                <thead>
                  <tr className="uppercase">
                    <th className="w-[80%] text-start">Track</th>
                    <th className="w-[20%] text-start">Album</th>
                  </tr>
                </thead>
                <tbody>
                  {tracks.data.map((music, index) => {
                    return (
                      <MusicCard
                        key={index}
                        index={index}
                        music={music}
                        type={"table-card"}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">Albums</p>
              <div className="flex gap-1">
                {albums?.data.slice(0, 5).map((album, index) => {
                  return (
                    <FeaturedCard
                      key={index}
                      musicData={album}
                      type={"albums"}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-xl font-bold">Similar Artists</p>
              <div className="flex items-center justify-between">
                {similarArtist?.data.slice(0, 4).map((album, index) => {
                  return (
                    <FeaturedCard
                      key={index}
                      musicData={album}
                      type={"artists"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const searchViewSmall = () => {
    if (isLoading) return <Line />;

    const { artist, albums, tracks, podcasts, similarArtist } = musicData;

    return musicData?.data?.length > 0 && !isLoading ? (
      <div className="flex h-screen w-full flex-col gap-4 overflow-y-scroll p-4 pb-[13rem]">
        {artistResult.slice(0, 3).map((artist, index) => {
          return (
            <Link
              to={`/artist/${artist.artist.id}`}
              key={index}
              className="flex w-full items-center gap-2"
            >
              <img
                src={artist?.artist?.picture_xl}
                alt=""
                className="h-[3.5rem] w-[3.5rem] rounded-full"
              />

              <div className="flex w-full flex-col py-1">
                <div className="flex items-center gap-2">
                  <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
                    {artist?.artist?.name}
                  </p>
                  <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
                </div>

                <div className="flex gap-1 text-sm font-light text-gray-400">
                  <p>Artist</p>
                </div>
              </div>
            </Link>
          );
        })}

        {musicData?.data?.map((music, index) => {
          return <SearchCard key={index} musicData={music} />;
        })}
      </div>
    ) : (
      PromptSearch()
    );
  };
  return (
    <>
      {isSmallScreen && (
        // <div className="fixed left-0 top-0 z-[999] h-screen w-full grow bg-[var(--background-color)]">
        //   <div className="flex items-center bg-[var(--background-color-neutral)] px-3">
        //     <div
        //       className="bg-[var(--background-color-neutral)]"
        //       onClick={() => setToggleSearch(false)}
        //     >
        //       <RiArrowLeftLine className="h-6 w-6" />
        //     </div>
        //     <input
        //       type="text"
        //       className="w-full bg-[var(--background-color-neutral)] p-4 outline-none"
        //       placeholder="What do you want to listen to?"
        //       onChange={handleSearchQuery}
        //     />
        //   </div>
        //   {musicData?.data?.length > 0 && !isLoading ? (
        //     <div className="flex h-screen w-full flex-col gap-4 overflow-y-scroll p-4 pb-[13rem]">
        //       {artistResult.slice(0, 3).map((artist, index) => {
        //         return (
        //           <Link
        //             to={`/artist/${artist.artist.id}`}
        //             key={index}
        //             className="flex w-full items-center gap-2"
        //           >
        //             <img
        //               src={artist?.artist?.picture_xl}
        //               alt=""
        //               className="h-[3.5rem] w-[3.5rem] rounded-full"
        //             />

        //             <div className="flex w-full flex-col py-1">
        //               <div className="flex items-center gap-2">
        //                 <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
        //                   {artist?.artist?.name}
        //                 </p>
        //                 <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
        //               </div>

        //               <div className="flex gap-1 text-sm font-light text-gray-400">
        //                 <p>Artist</p>
        //               </div>
        //             </div>
        //           </Link>
        //         );
        //       })}

        //       {musicData?.data?.map((music, index) => {
        //         return <SearchCard key={index} musicData={music} />;
        //       })}
        //     </div>
        //   ) : (
        //     PromptSearch()
        //   )}
        // </div>

        <div className="fixed left-0 top-0 z-[999] h-screen w-full grow bg-[var(--background-color)]">
          <div className="flex items-center bg-[var(--background-color-neutral)] px-3">
            <div
              className="bg-[var(--background-color-neutral)]"
              onClick={() => setToggleSearch(false)}
            >
              <RiArrowLeftLine className="h-6 w-6" />
            </div>
            <input
              type="text"
              className="w-full bg-[var(--background-color-neutral)] p-4 outline-none"
              placeholder="What do you want to listen to?"
              onChange={handleSearchQuery}
            />
          </div>
          {searchViewSmall()}
        </div>
      )}

      {isLargeScreen &&
        // <div className="z-[999] flex h-full w-full grow flex-col bg-[var(--background-color)] px-4 py-6">
        //   <TabList type={"search"} />
        //   {query.length > 0 && (
        //     <div className="flex h-[30rem] flex-col gap-10 overflow-y-scroll">
        //       <div className="flex flex-col gap-4">
        //         <p className="text-xl font-bold">Artist</p>
        //         <div className="flex">
        //           {artist?.data.slice(0, 1).map((artist, index) => {
        //             const formatFanCounts = formatFanCount(artist);

        //             return (
        //               <Link
        //                 to={`/artist/${artist.id}`}
        //                 key={index}
        //                 className="flex w-full items-center gap-2"
        //               >
        //                 <img
        //                   src={artist.picture_xl}
        //                   alt=""
        //                   className="h-[10rem] w-[10rem] rounded-full"
        //                 />

        //                 <div className="flex w-full flex-col gap-3 py-1">
        //                   <div className="flex flex-col gap-1">
        //                     <div className="flex items-center gap-2">
        //                       <p className="overflow-hidden overflow-ellipsis whitespace-nowrap font-medium">
        //                         {artist.name}
        //                       </p>
        //                       <RiVerifiedBadgeFill className="h-4 w-4 text-[#1C9CEA]" />
        //                     </div>
        //                     <div className="flex gap-1 text-sm font-light text-gray-400">
        //                       <p>{formatFanCounts}</p>
        //                     </div>
        //                   </div>
        //                   <div className="flex w-fit gap-1 rounded-md bg-gray-400 px-1 text-sm font-light text-black">
        //                     <p>Artist</p>
        //                   </div>
        //                 </div>
        //               </Link>
        //             );
        //           })}
        //         </div>
        //       </div>

        //       <div className="flex flex-col gap-10">
        //         <p className="text-xl font-bold">Tracks</p>
        //         <table className="w-full">
        //           <thead>
        //             <tr className="uppercase">
        //               <th className="w-[80%] text-start">Track</th>
        //               <th className="w-[20%] text-start">Album</th>
        //             </tr>
        //           </thead>
        //           <tbody>
        //             {tracks.data.map((music, index) => {
        //               return (
        //                 <MusicCard
        //                   key={index}
        //                   index={index}
        //                   music={music}
        //                   type={"table-card"}
        //                 />
        //               );
        //             })}
        //           </tbody>
        //         </table>
        //       </div>

        //       <div className="flex flex-col gap-4">
        //         <p className="text-xl font-bold">Albums</p>
        //         <div className="flex gap-1">
        //           {albums?.data.slice(0, 5).map((album, index) => {
        //             return (
        //               <FeaturedCard
        //                 key={index}
        //                 musicData={album}
        //                 type={"albums"}
        //               />
        //             );
        //           })}
        //         </div>
        //       </div>

        //       <div className="flex flex-col gap-4">
        //         <p className="text-xl font-bold">Similar Artists</p>
        //         <div className="flex items-center justify-between">
        //           {similarArtist?.data.slice(0, 4).map((album, index) => {
        //             return (
        //               <FeaturedCard
        //                 key={index}
        //                 musicData={album}
        //                 type={"artists"}
        //               />
        //             );
        //           })}
        //         </div>
        //       </div>
        //     </div>
        //   )}
        // </div>
        searchViewLarge()}
    </>
  );
};

export default SearchView;
