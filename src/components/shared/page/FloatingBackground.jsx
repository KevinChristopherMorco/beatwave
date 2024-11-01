import React from "react";

const FloatingBackground = ({ imageURL }) => {
  return (
    <div
      className="top-0 bg-cover bg-center fixed h-[50vh] w-full"
      style={{ backgroundImage: `url(${imageURL})` }}
    />
  );
};

export default FloatingBackground;
