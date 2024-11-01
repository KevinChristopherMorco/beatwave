import React from "react";
import { useLocation } from "react-router-dom";

const SectionContainer = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" ? (
        <section className="p-6 flex flex-col gap-10 animate-fadeIn">
          {children}
        </section>
      ) : (
        <section className="relative bg-center grow">{children}</section>
      )}
    </>
  );
};

export default SectionContainer;
