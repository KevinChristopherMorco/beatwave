import React from "react";

const getRandomColor = (number) => {
  const lightColors = [
    "#E31D60",
    "#4AAB4E",
    "#FF6B1A",
    "#6538B1",
    "#00B6CE",
    "#F6BA09",
  ];

  const count = number % lightColors.length;

  return lightColors[count];
};

export default getRandomColor;
