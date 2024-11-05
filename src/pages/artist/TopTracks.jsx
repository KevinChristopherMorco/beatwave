import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";
import usePlayMusic from "../../hooks/usePlayMusic";

import MusicCard from "../../components/shared/MusicCard";
import PageHeader from "../../components/shared/PageHeader";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import TabList from "../../components/shared/buttons/TabList";
import { RiHeartLine, RiPlayCircleFill } from "@remixicon/react";
import PlayButton from "../../components/shared/buttons/PlayButton";

const TopTracks = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();
  const { currentAudio, isPlaying, handlePlayAudio } = usePlayMusic();

  useEffect(() => {
    getArtistsAllData(artistID);
    window.scrollTo({ top: 0 });
  }, [artistID]);

  if (isLoading) return;

  return (
    <div>
      <PageHeader musicData={musicData} type={"artist"} />
      <FloatingBackground imageURL={musicData.artist.picture_xl} />
      <PageFloatingContainer>
        <TabList musicData={musicData} />
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
    </div>
  );
};

export default TopTracks;
