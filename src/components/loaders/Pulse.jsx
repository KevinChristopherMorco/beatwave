import React from "react";

const Pulse = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[60vh] gap-10">
      <div class="loader"></div>
      <p className="text-lg font-medium">Fetching Data...</p>
    </div>
  );
};

export default Pulse;
