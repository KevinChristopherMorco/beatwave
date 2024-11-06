import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";
import usePlayMusic from "../../hooks/usePlayMusic";

import MusicCard from "../../components/shared/MusicCard";
import PageHeader from "../../components/shared/PageHeader";
import TabList from "../../components/shared/buttons/TabList";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import MainHeading from "../../components/shared/heading/MainHeading";
import Line from "../../components/loaders/Line";

const TopTracks = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();
  const { currentAudio, isPlaying, handlePlayAudio } = usePlayMusic();

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
        <TabList musicData={musicData} type={"page"} />
        <MainHeading title={`${musicData.artist.name}'s Top Tracks`} />
        <table className="w-full">
          <thead>
            <tr className="uppercase">
              <th className="w-[80%] text-start">Track</th>
              <th className="w-[20%] text-start">Album</th>
            </tr>
          </thead>
          <tbody>
            {musicData.tracks.data.map((music, index) => {
              return (
                <MusicCard
                  key={index}
                  index={index}
                  music={music}
                  currentAudio={currentAudio}
                  type={"table-card"}
                  isPlaying={isPlaying}
                  handlePlayAudio={handlePlayAudio}
                />
              );
            })}
          </tbody>
        </table>
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default TopTracks;
