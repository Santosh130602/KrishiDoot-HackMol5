import React from "react";
import "./preheader.css";
import WeatherForecast from "../weather/weather"

const PreHeader = () => {
  const width = window.innerWidth;
  console.log(width);

  return (
    <div className="bg-[#213c96] px-6 py-2 md:inline-block hidden w-full  ">
      <div className="flex justify-between items-center ml-6">
          <div id="weather-info">
            <WeatherForecast></WeatherForecast>
           </div>
        <div className="">
          <div className="" id="google_element"></div>
        </div>
      </div>
    </div>
  );
};

export default PreHeader;


