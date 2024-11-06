import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";
import useSlice from "../../hooks/useSlice";
import usePlayMusic from "../../hooks/usePlayMusic";

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
import ViewMoreButton from "../../components/shared/buttons/ViewMoreButton";
import FeaturedCard from "../../components/shared/FeaturedCard";
import FeatureData from "../../components/shared/FeatureData";

const Album = () => {
  const { albumID } = useParams();
  const { musicData, isLoading, getAlbumAllData } = useMusicApi();
  const { slice, handleViewItems } = useSlice();
  const { currentAudio, isPlaying, handlePlayAudio } = usePlayMusic();

  useEffect(() => {
    getAlbumAllData(albumID);
  }, []);

  if (isLoading) return <Line />;

  return (
    <SectionContainer>
      <PageHeader musicData={musicData} type={"album"} />
      <FloatingBackground imageURL={musicData.albumInformation.cover_xl} />
      <PageFloatingContainer>
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-medium">
            {musicData.albumInformation.title}
          </h1>
          <div className="flex items-center justify-between">
            <Link
              to={`/artist/${musicData.albumInformation.artist.id}`}
              className="group flex items-center gap-2"
            >
              <img
                src={musicData.albumInformation.artist.picture_xl}
                className="h-8 w-8 rounded-full font-medium"
                alt={musicData.albumInformation.artist.name}
              />
              <p className="transition-colors group-hover:text-[var(--brand-color-500)]">
                {musicData.albumInformation.artist.name}
              </p>
            </Link>
            <div>
              <p className="font-light text-gray-400">
                ({musicData.albumInformation.release_date})
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>
            Listen to the album{" "}
            <span className="font-medium">
              '{musicData.albumInformation.title}'
            </span>{" "}
            by {musicData.albumInformation.artist.name}
          </p>
        </div>

        <SegmentContainer>
          <Subheading title={"Album Tracks"} />
          <div className="flex flex-col gap-4">
            {musicData.albumInformation.tracks.data
              .slice(0, slice)
              .map((music, index) => {
                return (
                  <MusicCard
                    key={index}
                    music={music}
                    currentAudio={currentAudio}
                    isPlaying={isPlaying}
                    handlePlayAudio={handlePlayAudio}
                  />
                );
              })}
          </div>
          <ViewMoreButton
            slice={slice}
            length={musicData.albumInformation.tracks.data.length}
            maximizeText={"View more albums"}
            collapseText={"Minimize albums"}
            handleViewItems={handleViewItems}
          />
        </SegmentContainer>

        {musicData.artistAlbum.data.length > 0 && (
          <SegmentContainer>
            <Subheading
              title={"Popular Albums"}
              subtext={`Most popular albums from ${musicData.albumInformation.artist.name}`}
            />
            <ScrollableContainer>
              <FeatureData
                musicData={musicData.artistAlbum.data}
                types={"albums"}
              />
            </ScrollableContainer>
          </SegmentContainer>
        )}

        <SegmentContainer>
          <Subheading
            title={"Similar Albums"}
            subtext={`Find albums similar to ${musicData.albumInformation.title}`}
          />
          {/* <ScrollableContainer>
            {musicData.albumInformation.similar.data.map((similar, index) => {
              return (
                <FeaturedCard
                  key={index}
                  musicData={similar}
                  type={"artists"}
                />
              );
            })}
          </ScrollableContainer> */}
        </SegmentContainer>

        <SegmentContainer>
          <Subheading
            title={"Similar Arists"}
            subtext={`Find albums similar to ${musicData.albumInformation.artist.name}`}
          />
          <ScrollableContainer>
            <FeatureData
              musicData={musicData.similarArtists.data}
              types={"artists"}
            />
          </ScrollableContainer>
        </SegmentContainer>
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default Album;
