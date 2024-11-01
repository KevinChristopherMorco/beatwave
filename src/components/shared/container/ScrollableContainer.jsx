import React from "react";

const ScrollableContainer = ({ children }) => {
  return (
    <div className="scrollable-content flex -mx-6 overflow-x-scroll">
      {children}
    </div>
  );
};

export default ScrollableContainer;
