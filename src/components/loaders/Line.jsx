import React from "react";

const Line = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[80vh] gap-10">
      <div className="absolute top-[30%]">
        <div className="loader-line"></div>
      </div>
      <div>
        <p className="text-lg font-light">Fetching Data... Please wait</p>
      </div>
    </div>
  );
};

export default Line;
