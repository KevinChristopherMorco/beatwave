import React from "react";

const Line = () => {
  return (
    <div className="relative flex h-[80vh] flex-col items-center justify-center gap-10 bg-[var(--background-color)]">
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
