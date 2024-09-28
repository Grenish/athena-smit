import React from "react";

interface EventTickerGenProps {
  name: String;
}

const EventTickerGen:React.FC<EventTickerGenProps> = ({name}) => {
  return (
    <div className="bg-black  rounded-xl w-1/4 relative overflow-hidden">
      <div className="p-5">
        <h2 className="absolute text-white opacity-15 -z-1 text-9xl ciko top-5 right-[-150px] ">
          Athena
        </h2>
        <img src="/logo.png" alt="logo" className="w-[100px]" />
        <h2 className="text-white text-4xl ciko mt-5">Athena</h2>
      </div>
      <div className="w-full bg-white p-[0.1px]"></div>
      <div className="p-5  h-[190px] flex flex-col justify-between">
        <h2 className="text-5xl text-white text-balance ciko">{name}</h2>
        <p className="text-white">Aduience</p>
      </div>
      <div className="w-full bg-white p-[0.1px]"></div>
      <div className="p-5">
        <p className="text-white uppercase">October 21st</p>
      </div>
      <div className="w-full bg-white p-[0.1px]"></div>
      <div className="p-5">
        <p className="text-white uppercase">Amphitheater</p>
      </div>
    </div>
  );
};

export default EventTickerGen;
