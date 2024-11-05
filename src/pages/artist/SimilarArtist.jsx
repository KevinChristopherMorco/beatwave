import React, { useEffect } from "react";
import useMusicApi from "../../hooks/axios/useMusicApi";
import { useLocation, useParams } from "react-router-dom";

import PageHeader from "../../components/shared/PageHeader";
import FloatingBackground from "../../components/shared/page/FloatingBackground";
import PageFloatingContainer from "../../components/shared/container/PageFloatingContainer";
import FeatureData from "../../components/shared/FeatureData";
import FeaturedCard from "../../components/shared/FeaturedCard";
import MainHeading from "../../components/shared/heading/MainHeading";
import TabList from "../../components/shared/buttons/TabList";

const SimilarArtist = () => {
  const { artistID } = useParams();
  const { musicData, isLoading, getArtistsAllData } = useMusicApi();

  useEffect(() => {
    getArtistsAllData(artistID);
    window.scrollTo({ top: 0 });
  }, [artistID]);

  if (isLoading) return;

  return (
    <section>
      <PageHeader musicData={musicData} type={"artist"} />
      <FloatingBackground imageURL={musicData.artist.picture_xl} />
      <PageFloatingContainer>
        <TabList musicData={musicData} />

        <div>
          <MainHeading title={`Fans may also like:`} />
        </div>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 ">
          {musicData.similar.data.map((type, index) => {
            return (
              <FeaturedCard key={index} musicData={type} type={"artists"} />
            );
          })}
        </div>
      </PageFloatingContainer>
    </section>
  );
};

export default SimilarArtist;
