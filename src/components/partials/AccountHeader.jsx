import React from "react";

const AccountHeader = () => {
  return (
    <>
      <nav className="fixed z-[999] flex w-full items-center border-b border-gray-600 bg-[var(--background-color-neutral)] px-10 py-8 lg:left-[25%] lg:h-[5vh] xl:left-[15%] xl:h-[10vh]">
        <div className="w-full">
          <input
            type="text"
            className="w-[50%] rounded-md bg-[var(--input-background)] px-4 py-2 focus:outline-2 focus:outline-[var(--brand-color-500)]"
            placeholder="What do you want to listen to?"
          />
        </div>
      </nav>
    </>
  );
};

export default AccountHeader;
