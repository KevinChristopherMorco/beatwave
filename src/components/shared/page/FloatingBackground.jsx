import React from "react";

const FloatingBackground = ({ imageURL }) => {
  return (
    <div
      className="fixed top-0 h-[50vh] w-full bg-cover bg-center xl:h-full xl:bg-cover xl:bg-center"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
  );
};

export default FloatingBackground;
