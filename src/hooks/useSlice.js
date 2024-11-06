import { useState } from "react";

const useSlice = () => {
  const [slice, setSlice] = useState(8);

  const handleViewItems = (length) => {
    if (slice >= length) {
      setSlice(8);
    } else {
      setSlice((prev) => prev + 8);
    }
  };

  return { slice, handleViewItems };
};

export default useSlice;
