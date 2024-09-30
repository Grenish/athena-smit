import { eventNames } from "process";
import React from "react";

interface EventTickerParProps {
  name: String;
  eventName: String;
  teamName?: String;
}

const EventTicketPar: React.FC<EventTickerParProps> = ({
  name,
  eventName,
  teamName,
}) => {
  return (
    <div className="bg-black  rounded-xl w-1/4 relative overflow-hidden">
      <div className="p-5">
        <h2 className="absolute text-white opacity-25 -z-1 text-9xl ciko bottom-[190px] right-[-170px] -rotate-90 ">
          Athena
        </h2>
        <img src="/logo.png" alt="logo" className="w-[100px]" />
        <h2 className="text-white text-4xl ciko mt-5">Athena</h2>
      </div>
      <div className="w-[70%] bg-white p-[0.1px]"></div>
      <div className="p-5  h-[190px] flex flex-col justify-between">
        <h2 className="text-5xl text-white text-balance ciko">{name}</h2>
        <div className="">
          <p className="text-white">Event: {eventName}</p>
          {teamName ? (
            <p className="text-white">Team: {teamName}</p>
          ) : (
            <p className="text-white">Solo</p>
          )}
        </div>
      </div>
      <div className="w-1/2 bg-white p-[0.1px]"></div>
      <div className="p-5">
        <p className="text-white uppercase">October 21st</p>
      </div>
      <div className="w-1/3 bg-white p-[0.1px]"></div>
      <div className="p-5">
        <p className="text-white uppercase">Amphitheater</p>
      </div>
    </div>
  );
};

export default EventTicketPar;
