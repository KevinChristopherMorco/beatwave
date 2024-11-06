import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import useMusicApi from "../../hooks/axios/useMusicApi";

import TabList from "../../components/shared/buttons/TabList";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import FeaturedCard from "../../components/shared/FeaturedCard";
import MainHeading from "../../components/shared/heading/MainHeading";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import PageHeader from "../../components/shared/PageHeader";
import SectionContainer from "../../components/shared/container/SectionContainer";
import Line from "../../components/loaders/Line";

const SimilarArtist = () => {
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
        <MainHeading title={`Fans may also like:`} />
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
          {musicData.similar.data.map((type, index) => {
            return (
              <FeaturedCard key={index} musicData={type} type={"artists"} />
            );
          })}
        </div>
      </PageFloatingContainer>
    </SectionContainer>
  );
};

export default SimilarArtist;
