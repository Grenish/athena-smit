import React from "react";

interface EventTickerGenProps {
  name: String;
  width: String;
}

const EventTicketGen: React.FC<EventTickerGenProps> = ({ name, width }) => {
  return (
    <div className={`bg-black  rounded-xl ${width} relative overflow-hidden pointer-events-none`}>
      <div className="p-5">
        <h2 className="absolute text-white opacity-25 -z-1 text-9xl ciko bottom-[190px] right-[-170px] -rotate-90 pointer-events-none">
          Athena
        </h2>
        <img src="/logo.png" alt="logo" className="w-[100px]" />
        <h2 className="text-white text-4xl ciko mt-5 pointer-events-none">Athena</h2>
      </div>
      <div className="w-[70%] bg-white p-[0.1px]"></div>
      <div className="p-5  h-[190px] flex flex-col justify-between">
        <h2 className="text-5xl text-white text-balance ciko pointer-events-none">{name}</h2>
        <p className="text-white pointer-events-none">Aduience</p>
      </div>
      <div className="w-1/2 bg-white p-[0.1px]"></div>
      <div className="p-5">
        <p className="text-white uppercase pointer-events-none">October 21st</p>
      </div>
      <div className="w-1/3 bg-white p-[0.1px]"></div>
      <div className="p-5">
        <p className="text-white uppercase pointer-events-none">Amphitheater</p>
      </div>
    </div>
  );
};

export default EventTicketGen;
