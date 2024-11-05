import React from "react";

const PageFloatingContainer = ({ children }) => {
  return (
    <div className="relative z-[99] flex grow flex-col gap-8 bg-[var(--background-color)] p-4">
      {children}
    </div>
  );
};

export default PageFloatingContainer;
