import React from "react";
import { Link } from "react-router-dom";

import knownArtist from "../../json/known-artists.json";
import devPicks from "../../json/developer-pick.json";

import Card from "../../components/shared/Card";
import MainHeading from "../../components/shared/heading/MainHeading";
import FeaturedContainer from "../../components/shared/container/FeaturedContainer";

const Home = () => {
  return (
    <section className="p-6 flex flex-col gap-10 animate-fadeIn">
      <FeaturedContainer>
        <MainHeading title={"Popular Artists"} />
        <div className="scrollable-content  flex -mx-6 overflow-x-scroll">
          {knownArtist.artists.map((artist) => {
            return (
              <Link
                to={`artist/${artist.id}`}
                className="shrink-0 px-4 flex flex-col gap-4 items-center cursor-pointer group"
              >
                <div
                  className="w-[10rem] h-[10rem] bg-cover bg-center rounded-full border border-gray-800"
                  style={{ backgroundImage: `url(${artist.image})` }}
                ></div>
                <p className="font-medium group-hover:text-[var(--brand-color-400)] transition-colors">
                  {artist.name}
                </p>
              </Link>
            );
          })}
        </div>
      </FeaturedContainer>
      <FeaturedContainer>
        <MainHeading title={"Editor's Pick"} />
        <div className="scrollable-content  flex -mx-6 overflow-x-scroll">
          {devPicks.artists.map((artist) => {
            return (
              <Link
                to={`artist/${artist.id}`}
                className="shrink-0 px-4 flex flex-col gap-4 items-center cursor-pointer group"
              >
                <div
                  className="w-[10rem] h-[10rem] bg-cover bg-center rounded-full border border-gray-800"
                  style={{ backgroundImage: `url(${artist.image})` }}
                ></div>
                <p className="font-medium group-hover:text-[var(--brand-color-400)] transition-colors">
                  {artist.name}
                </p>
              </Link>
            );
          })}
        </div>
      </FeaturedContainer>
      {Array.from({ length: 10 }).map((_, index) => {
        return <Card key={index} />;
      })}
    </section>
  );
};

export default Home;
