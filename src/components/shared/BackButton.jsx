import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-gray-500 w-fit bg-opacity-20 w-16 h-16 flex items-center justify-center rounded-full"
      onClick={() => navigate(-1)}
    >
      <RiArrowLeftLine className="w-8 h-8" />
    </div>
  );
};

export default BackButton;
