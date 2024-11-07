import React from "react";

const formatFanCount = (musicData) => {
  const formatFanCount = musicData.nb_fan
    ?.toLocaleString()
    .split(",")
    .join(" ");

  return musicData.nb_fan > 1
    ? `${formatFanCount} fans`
    : `${formatFanCount} fan`;
};

export default formatFanCount;
