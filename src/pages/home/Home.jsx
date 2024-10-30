import React from "react";
import Card from "../../components/shared/Card";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      {Array.from({ length: 10 }).map((_, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default Home;
