import React from "react";
import { RiPlayFill, RiVolumeUpLine } from "@remixicon/react";

const Card = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://miro.medium.com/v2/resize:fit:681/1*EBOL4lka5QjcYoxj6AHp-g.png)`,
      }}
      className="relative flex flex-col gap-44 w-full h-[20rem] bg-cover bg-center rounded-md p-3"
    >
      <div class="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative flex gap-1">
        <img
          src="https://hips.hearstapps.com/hmg-prod/images/lil_wayne_photo_by_ray_tamarra_getty_images_entertainment_getty_56680625.jpg"
          alt=""
          className="w-[4rem] h-[4rem] rounded-lg"
        />
        <div className="flex flex-col py-1 px-2">
          <p className="text-lg font-bold">My Homies</p>
          <div className="flex gap-1">
            <p className="font-light">Singer •</p>
            <p className="font-light">Lil Wayne</p>
          </div>
        </div>
      </div>
      <div className="relative flex justify-between items-center">
        <div className="flex items-center gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-full">
          <RiVolumeUpLine className="w-5 h-5" />
          <p className="text-sm font-light">Preview</p>
        </div>
        <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center">
          <RiPlayFill className="w-7 h-7 text-black" />
        </div>
      </div>
    </div>
  );
};

export default Card;
