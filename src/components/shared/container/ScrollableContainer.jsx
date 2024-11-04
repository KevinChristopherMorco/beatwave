import React from "react";

const ScrollableContainer = ({ children }) => {
  return (
    <div className="scrollable-content -mx-4 flex overflow-x-scroll lg:m-0 lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-x-visible">
      {children}
    </div>
  );
};

export default ScrollableContainer;
