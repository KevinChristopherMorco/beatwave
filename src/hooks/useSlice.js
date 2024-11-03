import React, { useState } from "react";

const useSlice = () => {
  const [slice, setSlice] = useState(10);

  const handleViewItems = (length) => {
    if (slice >= length) {
      setSlice(10);
    } else {
      setSlice((prev) => prev + 10);
    }
  };

  return { slice, handleViewItems };
};

export default useSlice;
