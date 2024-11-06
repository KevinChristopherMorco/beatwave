import React from "react";

const AudioPlayer = () => {
  return (
    <div className="fixed bottom-0 z-[999] flex w-full items-center bg-[var(--background-color-neutral)] p-3">
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Taylor_Swift_112_%2818119055110%29.jpg/170px-Taylor_Swift_112_%2818119055110%29.jpg"
          alt=""
          className="h-14 w-14 rounded-md"
        />
        <div>
          <p className="text-lg font-medium">Shake it off</p>
          <p className="text-sm font-light">Taylor Swift</p>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
