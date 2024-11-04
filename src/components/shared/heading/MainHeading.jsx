import React from "react";
import ViewAll from "../prompts/ViewAll";

const MainHeading = ({ title, hasPrommpt }) => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-2xl font-bold">{title}</h1>
      {hasPrommpt && <ViewAll />}
    </div>
  );
};

export default MainHeading;
