import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMusicApi from "../../hooks/axios/useMusicApi";

import TabList from "../../components/shared/buttons/TabList";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import SectionContainer from "../../components/shared/container/SectionContainer";
import FeaturedCard from "../../components/shared/FeaturedCard";
import MainHeading from "../../components/shared/heading/MainHeading";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import PageHeader from "../../components/shared/PageHeader";
import Line from "../../components/loaders/Line";

const TopAlbums = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();

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
        <MainHeading title={`${musicData.artist.name}'s Albums`} />
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-10 ">
          {musicData.albums.data.map((type, index) => {
            return (
              <FeaturedCard key={index} musicData={type} type={"albums"} />
            );
          })}
        </div>
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default TopAlbums;
