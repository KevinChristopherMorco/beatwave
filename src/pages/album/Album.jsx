import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";

import Subheading from "../../components/shared/heading/Subheading";
import MusicCard from "../../components/shared/MusicCard";
import PageHeader from "../../components/shared/PageHeader";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import Pulse from "../../components/loaders/Pulse";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";

const Album = () => {
  const { albumID } = useParams();
  const { musicData, isLoading, getAlbumInformation } = useMusicApi();

  console.log(musicData);

  useEffect(() => {
    getAlbumInformation(albumID);
  }, []);

  if (isLoading) return <Pulse />;

  return (
    <SectionContainer>
      <PageHeader musicData={musicData} type={"album"} />
      <FloatingBackground imageURL={musicData.cover_xl} />

      <div className="p-6 relative z-[99] grow flex flex-col gap-5 bg-[var(--background-color)]">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">{musicData.title}</h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={musicData.artist.picture_xl}
                className="w-8 h-8 rounded-full font-medium"
                alt={musicData.artist.name}
              />
              <div>{musicData.artist.name}</div>
            </div>
            <div>
              <p className="font-light text-gray-400">
                ({musicData.release_date})
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Listen to the album{" "}
            <span className="font-medium">'{musicData.title}'</span> by{" "}
            {musicData.artist.name}
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <Subheading title={"Album Tracks"} />
          <div className="flex flex-col gap-4">
            {musicData.tracks.data.slice(0, 14).map((music, index) => {
              return <MusicCard key={index} music={music} />;
            })}
          </div>
          <div className="flex items-center justify-center">
            <button className="w-full border p-2 rounded-md hover:bg-[var(--background-color-neutral)] transition-colors">
              See more tracks
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Subheading
            title={"Similar Artists"}
            subtext={`Find artists similar to ${musicData.artist.name}`}
          />
          {/* <ScrollableContainer>
            {musicData.similar.data.map((similar, index) => {
              return (
                <FeaturedCard
                  key={index}
                  musicData={similar}
                  type={"artists"}
                />
              );
            })}
          </ScrollableContainer> */}
        </div>
      </div>
    </SectionContainer>
  );
};

export default Album;
