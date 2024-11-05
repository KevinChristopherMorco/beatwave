import React from "react";
import { Link } from "react-router-dom";

const ViewAll = ({ link }) => {
  return (
    <Link
      to={link}
      className="cursor-pointer rounded-md border border-[var(--brand-color-500)] px-4 py-1 font-medium text-[var(--brand-color-500)] transition-colors transition-colors hover:bg-[var(--brand-color-600)] hover:text-white"
    >
      View All
    </Link>
  );
};

export default ViewAll;
