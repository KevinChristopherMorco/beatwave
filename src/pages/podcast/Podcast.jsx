import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";

import FeaturedCard from "../../components/shared/FeaturedCard";
import Subheading from "../../components/shared/heading/Subheading";
import MusicCard from "../../components/shared/MusicCard";
import PageHeader from "../../components/shared/PageHeader";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";
import Pulse from "../../components/loaders/Pulse";
import SegmentContainer from "../../components/shared/container/SegmentContainer";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import Line from "../../components/loaders/Line";

const Podcast = () => {
  const { podcastID } = useParams();
  const { musicData, isLoading, getPodcastInformation } = useMusicApi();

  useEffect(() => {
    getPodcastInformation(podcastID);
    window.scrollTo({ top: 0 });
  }, [podcastID]);

  if (isLoading) return <Line />;

  return (
    <SectionContainer>
      <PageHeader musicData={musicData} type={"podcast"} />
      <FloatingBackground imageURL={musicData.picture_xl} />
      <PageFloatingContainer>
        <p className="text-4xl font-bold">{musicData.title}</p>
        <p>Preview not available</p>
        <p>{musicData.description}</p>
        {/* {musicData.tracks.data.length > 0 && (
          <>
            <div>
              <p>
                Listen to all the previews of all {musicData.artist.name}'s
                tracks
              </p>
            </div>
            <SegmentContainer>
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
            </SegmentContainer>
          </>
        )} */}
        <div className="text-sm">
          For the full podcast session sign up to deezers{" "}
          <span className="font-bold text-[var(--brand-color-400)]">
            <Link to={musicData.link}> here!</Link>
          </span>
        </div>
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default Podcast;
