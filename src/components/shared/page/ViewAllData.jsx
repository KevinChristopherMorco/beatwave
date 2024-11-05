import React from "react";
import { useParams } from "react-router-dom";

const ViewAllData = () => {
  const { artistID } = useParams();
  return (
    <div>
      <p className="text-3xl font-bold">Heading</p>
    </div>
  );
};

export default ViewAllData;
