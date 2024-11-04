import React from "react";

import useScreenResponsiveness from "../../hooks/useScreenResponsiveness";

import FeaturedCard from "./FeaturedCard";

const FeatureData = ({ musicData, types }) => {
  const {
    screenSize: { sm, md, lg, xl, xxl },
  } = useScreenResponsiveness();

  return (
    <>
      {(sm || md) &&
        musicData.map((type, index) => {
          return <FeaturedCard key={index} musicData={type} type={types} />;
        })}

      {(lg || xl || xxl) &&
        musicData.slice(0, 4).map((type, index) => {
          return <FeaturedCard key={index} musicData={type} type={types} />;
        })}
    </>
  );
};

export default FeatureData;
