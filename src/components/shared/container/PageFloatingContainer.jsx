import React from "react";

const PageFloatingContainer = ({ children }) => {
  return (
    <div className="p-6 relative z-[99] grow flex flex-col gap-5 bg-[var(--background-color)]">
      {children}
    </div>
  );
};

export default PageFloatingContainer;
