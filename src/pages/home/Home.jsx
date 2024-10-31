import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import knownArtist from "../../json/known-artists.json";
import devPicks from "../../json/developer-pick.json";
import useMusicApi from "../../hooks/axios/useMusicApi";

import FeaturedCard from "../../components/shared/FeaturedCard";
import MainHeading from "../../components/shared/heading/MainHeading";
import FeaturedContainer from "../../components/shared/container/FeaturedContainer";

const Home = () => {
  const { musicData, isLoading, getChartInformation } = useMusicApi();

  useEffect(() => {
    getChartInformation();
  }, []);

  if (isLoading) return;

  console.log(musicData);

  return (
    <section className="p-6 flex flex-col gap-10 animate-fadeIn">
      <FeaturedContainer>
        <MainHeading title={"Popular Artists"} />
        <div className="scrollable-content  flex -mx-6 overflow-x-scroll">
          {knownArtist.artists.map((artist, index) => {
            return (
              <FeaturedCard key={index} musicData={artist} type={"artists"} />
            );
          })}
        </div>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Editor's Pick"} />
        <div className="scrollable-content  flex -mx-6 overflow-x-scroll">
          {devPicks.artists.map((artist, index) => {
            return (
              <FeaturedCard key={index} musicData={artist} type={"artists"} />
            );
          })}
        </div>
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
        <div className="scrollable-content flex -mx-6 overflow-x-scroll">
          {musicData.podcasts.data.map((podcast, index) => {
            return (
              <FeaturedCard key={index} musicData={podcast} type={"podcasts"} />
            );
          })}
        </div>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Trending Tracks"} />
        {musicData.tracks.data.map((music, index) => {
          return <FeaturedCard key={index} musicData={music} type={"tracks"} />;
        })}
      </FeaturedContainer>
    </section>
  );
};

export default Home;
