import React, { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const TabList = ({ musicData }) => {
  const { artistID, albumID } = useParams();
  const { pathname } = useLocation();

  return (
    <ul className="flex w-fit gap-10 py-6 text-lg">
      <li
        className={`${pathname === `/artist/${musicData.artist.id}` ? "border-b-2 border-[var(--brand-color-500)] pb-2 font-bold" : "font-light transition-colors hover:text-[var(--brand-color-400)]"} cursor-pointer `}
      >
        <Link to={`/artist/${musicData.artist.id}`}>Preview</Link>
      </li>
      <li
        className={`${pathname === `/artist/${musicData.artist.id}/top-tracks` ? "border-b-2 border-[var(--brand-color-500)] pb-2 font-bold" : "font-light transition-colors hover:text-[var(--brand-color-400)]"} cursor-pointer `}
      >
        <Link to={`/artist/${musicData.artist.id}/top-tracks`}>Top Tracks</Link>
      </li>
      <li
        className={`${pathname === `/artist/${musicData.artist.id}/top-albums` ? "border-b-2 border-[var(--brand-color-500)] pb-2 font-bold" : "font-light transition-colors hover:text-[var(--brand-color-400)]"} cursor-pointer `}
      >
        <Link to={`/artist/${musicData.artist.id}/top-albums`}>Top Albums</Link>
      </li>
      <li
        className={`${pathname === `/artist/${musicData.artist.id}/similar-artist` ? "border-b-2 border-[var(--brand-color-500)] pb-2 font-bold" : "font-light transition-colors hover:text-[var(--brand-color-400)]"} cursor-pointer `}
      >
        <Link to={`/artist/${musicData.artist.id}/similar-artist`}>
          Similar Artists
        </Link>
      </li>
    </ul>
  );
};

export default TabList;
