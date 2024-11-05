import React from "react";
import { Link } from "react-router-dom";

const ViewAll = () => {
  return (
    <Link
      to={"/all"}
      className="cursor-pointer font-medium text-[var(--brand-color-500)] transition-colors transition-colors hover:text-[var(--brand-color-300)]"
    >
      View All
    </Link>
  );
};

export default ViewAll;
