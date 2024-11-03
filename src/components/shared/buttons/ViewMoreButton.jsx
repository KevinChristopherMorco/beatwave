import React from "react";
import useSlice from "../../../hooks/useSlice";

const ViewMoreButton = ({
  slice,
  length,
  maximizeText,
  collapseText,
  handleViewItems,
}) => {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={() => handleViewItems(length)}
        className="w-full border p-2 rounded-md hover:bg-[var(--background-color-neutral)] transition-colors"
      >
        {slice >= length ? collapseText : maximizeText}
      </button>
    </div>
  );
};

export default ViewMoreButton;
