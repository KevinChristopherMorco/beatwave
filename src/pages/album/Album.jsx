import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";

import Subheading from "../../components/shared/heading/Subheading";
import MusicCard from "../../components/shared/MusicCard";
import PageHeader from "../../components/shared/PageHeader";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import Pulse from "../../components/loaders/Pulse";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import SegmentContainer from "../../components/shared/container/SegmentContainer";
import Line from "../../components/loaders/Line";

const Album = () => {
  const { albumID } = useParams();
  const { musicData, isLoading, getAlbumInformation } = useMusicApi();

  useEffect(() => {
    getAlbumInformation(albumID);
  }, []);

  if (isLoading) return <Line />;

  return (
    <SectionContainer>
      <PageHeader musicData={musicData} type={"album"} />
      <FloatingBackground imageURL={musicData.cover_xl} />
      <PageFloatingContainer>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">{musicData.title}</h1>
          <div className="flex items-center justify-between">
            <Link
              to={`/artist/${musicData.artist.id}`}
              className="flex items-center gap-2 group"
            >
              <img
                src={musicData.artist.picture_xl}
                className="w-8 h-8 rounded-full font-medium"
                alt={musicData.artist.name}
              />
              <p className="group-hover:text-[var(--brand-color-500)] transition-colors">
                {musicData.artist.name}
              </p>
            </Link>
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

        <SegmentContainer>
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
        </SegmentContainer>

        {/* <SegmentContainer>
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
        </SegmentContainer> */}
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default Album;
