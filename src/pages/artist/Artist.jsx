import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";

import FeaturedCard from "../../components/shared/FeaturedCard";
import Subheading from "../../components/shared/heading/Subheading";
import MusicCard from "../../components/shared/MusicCard";
import PageHeader from "../../components/shared/PageHeader";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";
import Pulse from "../../components/loaders/Pulse";

const Artist = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();

  useEffect(() => {
    getArtistsAllData(artistID);
    window.scrollTo({ top: 0 });
  }, [artistID]);

  console.log(isLoading);

  if (isLoading) return <Pulse />;

  console.log(musicData);

  return (
    <SectionContainer>
      <PageHeader musicData={musicData} type={"artist"} />
      <FloatingBackground imageURL={musicData.artist.picture_xl} />
      <div className="p-6 relative z-[99] grow flex flex-col gap-5 bg-[var(--background-color)]">
        <div>
          <p>
            Listen to all the previews of all {musicData.artist.name}'s tracks
          </p>
        </div>
        <div className="flex flex-col gap-8">
          <Subheading title={"Artist's top tracks"} />
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
            title={"Popular Albums"}
            subtext={`Most popular albums from ${musicData.artist.name}`}
          />
          <div className="scrollable-content flex -mx-6 overflow-x-scroll">
            {musicData.albums.data.data.map((podcast, index) => {
              return (
                <FeaturedCard key={index} musicData={podcast} type={"albums"} />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <Subheading
            title={"Similar Artists"}
            subtext={`Find artists similar to ${musicData.artist.name}`}
          />
          <ScrollableContainer>
            {musicData.similar.data.map((similar, index) => {
              return (
                <FeaturedCard
                  key={index}
                  musicData={similar}
                  type={"artists"}
                />
              );
            })}
          </ScrollableContainer>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Artist;