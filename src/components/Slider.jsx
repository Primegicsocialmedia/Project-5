import React from "react";
import { descriptions, images } from "../data";

const Slider = () => {
  return (
    // Container for the slider
    <div>
      {/* Slider */}
      <div className="flex gap-x-20 lg:items-start items-center lg:flex-row flex-col">
        {/* Images */}
        <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative ">
          {images.map((image, i) => (
            <img
              key={i}
              src={image}
              className="w-full h-full absolute object-cover rounded-3xl"
            />
          ))}
        </div>
        {/* Descriptions */}
        <div className="relative sm:w-[400px]  w-[320px] mt-22 lg:mt-5"> 
          {descriptions.map((description, i) => (
            <p key={i} className="text-center sm:text-xl text-gray-600 absolute">
              {description}
              
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
