import React from "react";

const AccountHeader = () => {
  return (
    <nav className="fixed z-[999] flex w-full items-center bg-[var(--background-color-neutral)] px-2 lg:left-[25%] lg:h-[5vh] xl:left-[17%] xl:h-[10vh]">
      <div className="w-full">
        <input
          type="text"
          className="w-[50%] rounded-md bg-[var(--input-background)] px-4 py-2 focus:outline-2 focus:outline-[var(--brand-color-500)]"
          placeholder="What do you want to listen to?"
        />
      </div>
    </nav>
  );
};

export default AccountHeader;
