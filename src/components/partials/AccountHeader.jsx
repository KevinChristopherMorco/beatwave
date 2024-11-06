import React from "react";

const AccountHeader = ({ handleInputChange }) => {
  return (
    <>
      <nav className="z-[999] flex w-full items-center border-b border-gray-600 bg-[var(--background-color-neutral)] px-4 py-10  lg:h-[5vh] xl:h-[10vh]">
        <div className="w-full">
          <input
            type="text"
            className="w-[50%] rounded-md bg-[var(--input-background)] px-4 py-2 focus:outline-2 focus:outline-[var(--brand-color-500)]"
            placeholder="What do you want to listen to?"
            onChange={handleInputChange}
          />
        </div>
      </nav>
    </>
  );
};

export default AccountHeader;
