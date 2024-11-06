import React from "react";

import ViewAll from "../prompts/ViewAll";

const Subheading = ({ title, subtext, link, hasPrommpt }) => {
  return (
    <div className="flex items-center justify-between lg:gap-14">
      <div className="flex flex-col gap-1">
        <p className="text-xl font-bold">{title}</p>
        {subtext && <p className="font-light text-gray-400">{subtext}</p>}
      </div>
      {hasPrommpt && <ViewAll link={link} />}
    </div>
  );
};

export default Subheading;
