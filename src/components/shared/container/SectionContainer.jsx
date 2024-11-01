import React from "react";
import { useLocation } from "react-router-dom";

const SectionContainer = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? (
        <section className="p-4 flex flex-col gap-10 animate-fadeIn lg:col-span-2 lg:col-start-2">
          {children}
        </section>
      ) : (
        <section className="relative bg-center grow lg:col-span-2 lg:col-start-2">
          {children}
        </section>
      )}
    </>
  );
};

export default SectionContainer;
