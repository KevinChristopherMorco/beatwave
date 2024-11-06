import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";
import usePlayMusic from "../../hooks/usePlayMusic";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import useSlice from "../../hooks/useSlice";

import Line from "../../components/loaders/Line";
import TabList from "../../components/shared/buttons/TabList";
import ViewMoreButton from "../../components/shared/buttons/ViewMoreButton";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";
import SectionContainer from "../../components/shared/container/SectionContainer";
import SegmentContainer from "../../components/shared/container/SegmentContainer";
import FeatureData from "../../components/shared/FeatureData";
import Subheading from "../../components/shared/heading/Subheading";
import MusicCard from "../../components/shared/MusicCard";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import PageHeader from "../../components/shared/PageHeader";

const Artist = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();
  const { currentAudio, isPlaying, handlePlayAudio } = usePlayMusic();
  const { slice, handleViewItems } = useSlice();

  useEffect(() => {
    getArtistsAllData(artistID);
    window.scrollTo({ top: 0 });
  }, [artistID]);

  if (isLoading) return <Line />;

  return (
    <SectionContainer>
      <PageHeader musicData={musicData} type={"artist"} />
      <FloatingBackground imageURL={musicData.artist.picture_xl} />
      <PageFloatingContainer>
        <TabList musicData={musicData} />

        {musicData.tracks.data.length > 0 && (
          <>
            <SegmentContainer>
              <Subheading
                title={"Artist's top tracks"}
                link={`/artist/${musicData.artist.id}/top-tracks`}
                hasPrommpt={true}
              />
              <div className="flex flex-col gap-4">
                <p>
                  Listen to all the previews of all {musicData.artist.name}'s
                  tracks
                </p>
                {musicData.tracks.data.slice(0, slice).map((music, index) => {
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

              {/* <ViewMoreButton
                slice={slice}
                length={musicData.tracks.data.length}
                maximizeText={"View more tracks"}
                collapseText={"Minimize tracks"}
                handleViewItems={handleViewItems}
              /> */}

              <Link
                to={`/artist/${musicData.artist.id}/top-tracks`}
                className="rounded-md border border-[var(--brand-color-500)] p-2 text-center text-[var(--brand-color-500)] transition-colors hover:bg-[var(--brand-color-500)] hover:text-white"
              >
                <p>View more tracks</p>
              </Link>
            </SegmentContainer>
          </>
        )}

        {musicData.albums.data.length > 0 && (
          <SegmentContainer>
            <Subheading
              title={"Popular Albums"}
              subtext={`More albums from ${musicData.artist.name}`}
              link={`/artist/${musicData.artist.id}/top-albums`}
              hasPrommpt={true}
            />
            <ScrollableContainer>
              <FeatureData musicData={musicData.albums.data} types={"albums"} />
            </ScrollableContainer>
          </SegmentContainer>
        )}

        {musicData.similar.data.length > 0 && (
          <SegmentContainer>
            <Subheading
              title={"Fans Also Like"}
              subtext={`Find artists similar to ${musicData.artist.name}`}
              link={`/artist/${musicData.artist.id}/similar-artist`}
              hasPrommpt={true}
            />
            <ScrollableContainer>
              <FeatureData
                musicData={musicData.similar.data}
                types={"artists"}
              />
            </ScrollableContainer>
          </SegmentContainer>
        )}
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default Artist;
