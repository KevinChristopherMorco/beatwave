import React from "react";

const FloatingBackground = ({ imageURL }) => {
  return (
    <div
      className="top-0 bg-cover bg-center fixed h-[50vh] w-full xl:h-[75vh]"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
  );
};

export default FloatingBackground;
