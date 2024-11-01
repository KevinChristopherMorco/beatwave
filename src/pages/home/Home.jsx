import React, { useEffect } from "react";

import knownArtist from "../../json/known-artists.json";
import devPicks from "../../json/developer-pick.json";
import useMusicApi from "../../hooks/axios/useMusicApi";

import FeaturedCard from "../../components/shared/FeaturedCard";
import MainHeading from "../../components/shared/heading/MainHeading";
import FeaturedContainer from "../../components/shared/container/FeaturedContainer";
import ScrollableContainer from "../../components/shared/container/ScrollableContainer";
import SectionContainer from "../../components/shared/container/SectionContainer";

const Home = () => {
  const { musicData, isLoading, getChartInformation } = useMusicApi();

  useEffect(() => {
    getChartInformation();
  }, []);

  if (isLoading) return;

  return (
    <SectionContainer>
      <FeaturedContainer>
        <MainHeading title={"Popular Artists"} />
        <ScrollableContainer>
          {knownArtist.artists.map((artist, index) => {
            return (
              <FeaturedCard key={index} musicData={artist} type={"artists"} />
            );
          })}
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Editor's Pick"} />
        <ScrollableContainer>
          {devPicks.artists.map((artist, index) => {
            return (
              <FeaturedCard key={index} musicData={artist} type={"artists"} />
            );
          })}
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Hottest Albums"} />
        <div className="scrollable-content flex -mx-6 overflow-x-scroll">
          {musicData.albums.data.map((album, index) => {
            return (
              <FeaturedCard key={index} musicData={album} type={"albums"} />
            );
          })}
        </div>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Listener's Favorites"} />
        <ScrollableContainer>
          {musicData.podcasts.data.map((podcast, index) => {
            return (
              <FeaturedCard key={index} musicData={podcast} type={"podcasts"} />
            );
          })}
        </ScrollableContainer>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Trending Tracks"} />
        {musicData.tracks.data.map((music, index) => {
          return <FeaturedCard key={index} musicData={music} type={"tracks"} />;
        })}
      </FeaturedContainer>
    </SectionContainer>
  );
};

export default Home;
