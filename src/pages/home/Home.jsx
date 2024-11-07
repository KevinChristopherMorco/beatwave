import React, { useEffect } from "react";

import knownArtist from "../../json/known-artists.json";
import devPicks from "../../json/developer-pick.json";
import useMusicApi from "../../hooks/axios/useMusicApi";
import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

import FeaturedCard from "../../components/shared/FeaturedCard";
import MainHeading from "../../components/shared/heading/MainHeading";
import FeaturedContainer from "../../components/shared/container/FeaturedContainer";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FeatureData from "../../components/shared/FeatureData";
import usePlayMusic from "../../hooks/usePlayMusic";

const Home = () => {
  const { musicData, isLoading, getChartInformation } = useMusicApi();
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();

  useEffect(() => {
    getChartInformation();
  }, []);

  const { currentAudio, isPlaying, handlePlayAudio } = usePlayMusic();

  if (isLoading) return;

  return (
    <SectionContainer>
      <FeaturedContainer>
        <MainHeading title={"Popular Artists"} />
        <ScrollableContainer>
          <FeatureData musicData={knownArtist.artists} types={"artists"} />
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Editor's Pick"} />
        <ScrollableContainer>
          <FeatureData musicData={devPicks.artists} types={"artists"} />
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Hottest Albums"} />
        <ScrollableContainer>
          <FeatureData
            musicData={musicData.albums.data}
            types={"albums"}
            isScroll={true}
          />
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Listener's Favorites"} />
        <ScrollableContainer>
          <FeatureData musicData={musicData.podcasts.data} types={"podcasts"} />
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Trending Tracks"} />
        <div className="grid gap-10 md:grid-cols-2">
          {musicData.tracks.data.map((music, index) => {
            return (
              <FeaturedCard
                key={index}
                musicData={music}
                type={"tracks"}
                currentAudio={currentAudio}
                isPlaying={isPlaying}
                handlePlayAudio={handlePlayAudio}
              />
            );
          })}
        </div>
      </FeaturedContainer>
    </SectionContainer>
  );
};

export default Home;
