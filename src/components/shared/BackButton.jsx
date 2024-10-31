import React from "react";
import { useNavigate } from "react-router-dom";
import { RiArrowLeftLine } from "@remixicon/react";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative bg-gray-500 bg-opacity-20 w-10 h-10 flex items-center justify-center rounded-full"
      onClick={() => navigate(-1)}
    >
      <RiArrowLeftLine className="w-6 h-6" />
    </div>
  );
};

export default BackButton;
