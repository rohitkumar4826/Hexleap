import React from "react";
import Image from "next/image";
import dupli from "./card.json";
interface Card {
  name: string;
  imgUrl: string;
  events: number;
  sport: string;
}



const Cards = ({ ispresent }:any) => {
  return (
    <div className="w-[100%]  mt-[8%] mb-[8%]">
      <p className="categ mb-[2%]  bg-transparent w-[80%] m-auto">
        <span
          className={`py-[1%] border-b-2 border-[#738FFF] ${ispresent ? "text-white" : "text-black"
            }`}
        >
          Sports
        </span>
      </p>
      <div className="grsas grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 m-auto w-[80%] h-auto mb-[4%] ">
        {dupli.map((obj:Card, index : number) => (
          <div
            className={`outerbox w-[12.4rem] p-2  m-auto mb-4 bg-opacity-100 ${ispresent ? "bg-[#3B3E47]" : "bg-[#FFFFFF]"
              } `}
            key={index}
          >
            <div className="innerbox bg-white bg-opacity-5">
              <Image
                className="mb-4 w-auto h-auto"
                src={obj.imgUrl}
                alt="cards"
                width={200}
                height={200}
              />
              <p className="player text-white mb-4 text-base font-medium">
                {obj.name}
              </p>
              <div className="intro flex justify-around rounded-sm">
                <div
                  className={`lefts  w-[50%] p-2  rounded-sm ${ispresent ? "bg-[#292B32]" : "bg-[#F7F7F8]"
                    } `}
                >
                  <p
                    className={`text-xs font-normal  ${ispresent ? "text-[#DFDFDF]" : "text-[#525965]"
                      }`}
                  >
                    Total Event
                  </p>
                  <p
                    className={`text-sm font-medium ${ispresent ? "text-white" : "text-black"
                      }`}
                  >
                    {obj.events} Events
                  </p>
                </div>
                <div
                  className={`right  w-[50%] p-2 rounded-sm ${ispresent ? "bg-[#292B32]" : "bg-[#F7F7F8]"
                    } `}
                >
                  <p
                    className={`text-xs font-normal ${ispresent ? "text-[#DFDFDF]" : "text-[#525965]"
                      }`}
                  >
                    Sport
                  </p>
                  <p
                    className={`text-sm font-medium ${ispresent ? "text-white" : "text-black"
                      }`}
                  >
                    {obj.sport}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hover:scale-105 transition-all ease-in-out hover:cursor-pointer w-[9rem] p-3 text-sm font-semibold text-white text-center bg-[#2C9CF0] m-auto">
        See More
      </div>
    </div>
  );
};

export default Cards;
