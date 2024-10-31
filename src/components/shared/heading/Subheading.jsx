import React from "react";

const Subheading = ({ title, subtext }) => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-xl">{title}</p>
      {subtext && <p className="font-light text-gray-400">{subtext}</p>}
    </div>
  );
};

export default Subheading;
