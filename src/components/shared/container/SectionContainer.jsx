import React from "react";
import { useLocation } from "react-router-dom";

const SectionContainer = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/" || pathname === "/favorites" ? (
        <section className="flex animate-fadeIn flex-col gap-10 p-4 lg:col-span-2 lg:col-start-2 lg:mt-[5rem]">
          {children}
        </section>
      ) : (
        <section className="relative grow bg-center lg:col-span-2 lg:col-start-2 lg:mt-[5rem]">
          {children}
        </section>
      )}
    </>
  );
};

export default SectionContainer;
