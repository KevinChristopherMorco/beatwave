import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";
import useSlice from "../../hooks/useSlice";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";
import usePlayMusic from "../../hooks/usePlayMusic";

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
import ViewMoreButton from "../../components/shared/buttons/ViewMoreButton";
import FeatureData from "../../components/shared/FeatureData";

const Artist = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();
  const { slice, handleViewItems } = useSlice();
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();
  const handlePlayAudio = usePlayMusic();

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
        {musicData.tracks.data.length > 0 && (
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
                {musicData.tracks.data.slice(0, slice).map((music, index) => {
                  return (
                    <MusicCard
                      key={index}
                      music={music}
                      handlePlayAudio={handlePlayAudio}
                    />
                  );
                })}
              </div>

              <ViewMoreButton
                slice={slice}
                length={musicData.tracks.data.length}
                maximizeText={"View more tracks"}
                collapseText={"Minimize tracks"}
                handleViewItems={handleViewItems}
              />
            </SegmentContainer>
          </>
        )}

        {musicData.albums.data.data.length > 0 && (
          <SegmentContainer>
            <Subheading
              title={"Popular Albums"}
              subtext={`More albums from ${musicData.artist.name}`}
              hasPrommpt={true}
            />
            <ScrollableContainer>
              <FeatureData
                musicData={musicData.albums.data.data}
                types={"albums"}
              />
            </ScrollableContainer>
          </SegmentContainer>
        )}

        {musicData.similar.data.length > 0 && (
          <SegmentContainer>
            <Subheading
              title={"Fans Also Like"}
              subtext={`Find artists similar to ${musicData.artist.name}`}
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
