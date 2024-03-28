"use client";
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import pul from "./gif.json";
import Carousel from '@itseasy21/react-elastic-carousel';
import "./page.css";
interface Details{
  team:string,
  time:string,
  image:string,
  dest:string
}
interface GiftProps {
  ispresent: boolean;
}
const Gifts: React.FC<GiftProps> = ({ ispresent }) => {
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setItemsToShow(1);
        } else if (window.innerWidth < 1024) {
          setItemsToShow(2);
        } else {
          setItemsToShow(3);
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      handleResize();
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
  return (
    <div className="pulp p-10 linearg h-full  w-[80%] m-auto  rounded-md" style={{ background: ispresent ? 'linear-gradient(to bottom, rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))' : 'linear-gradient(to bottom, rgba(249, 248, 255, 1), rgba(243, 249, 255, 1))', height: 'auto' }}>
        <p className={`text-[3rem] mb-2 font-medium flex justify-center ${ispresent ? 'text-white': 'text-black' }`}>
        Collection Spotlight
        </p>
        <p className={`text-center mb-8 w-[80%] m-auto text-sm font-normal  ${ispresent ? 'text-white': 'text-black' }`}>
        Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!
        </p>

    <Carousel isRTL={false} itemsToShow={itemsToShow} pagination={false} className="w-full max-w-[53rem] h-full m-auto relative">
            {pul.map((obj:Details, index:number) => (
          <div
            key={index}
            className="carousel-item w-full h-full"
          >
            <div className={`outerbox w-[13.9rem] p-3 m-auto z-20 border-collapse  bg-opacity-100 drop-shadow-md mb-2 ${ispresent ? 'bg-[#3B3E47]' : 'bg-[#FFFFFF]'} `}>
              <div className={`innerbox bg-opacity-100 border-collapse ${ispresent ? 'bg-[#3B3E47]' : 'bg-[#FFFFFF]'} `}>
                <Image className="m-auto w-[100%] h-auto" src={obj.image} alt="cards" width={200} height={200} />
                <div className="mb-[4%] flex z-20 justify-around">
                  <span className={`w-2.5 h-5  shadow-inner  border-collapse rounded-tr-full rounded-br-full ml-[-0.8rem]`} style={{ background: ispresent ? 'linear-gradient(to bottom, rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))' : 'linear-gradient(to bottom, rgba(244, 243, 250, 1), rgba(238, 243, 250, 1))'}}></span>
                  <hr className="border-b border-dashed border-gray-400 mb-[4%] w-[90%] m-auto" />
                  <span className={`w-2.5 h-5  shadow-inner  border-collapse rounded-tl-full rounded-bl-full mr-[-0.8rem] `} style={{ background: ispresent ? 'linear-gradient(to bottom, rgba(24, 40, 42, 1), rgba(34, 26, 44, 1))' : 'linear-gradient(to bottom, rgba(244, 243, 250, 1), rgba(238, 243, 250, 1))'}}></span>
                </div>
                <div className="w-[100%] m-auto">
                  <p className={`text-center mb-[4%] text-base font-medium ${ispresent ? 'text-white' : 'text-black'}`}>{obj.team}</p>
                  <div className="text-center mb-[8%]">
                    <span className={`font-normal text-sm ${ispresent ? 'text-white' : 'text-black'}`}>{obj.time}</span>
                    <p className={`mt-[4%] font-normal text-sm text-[#DFDFDF] ${ispresent? 'text-[#DFDFDF]' : 'text-[#525965]'}`}>{obj.dest}</p>
                  </div>
                </div>
                <div className="font-normal text-xs hover:cursor-pointer m-auto intro flex justify-around rounded-sm w-[90%] bg-black p-2 text-white">
                  Orange Collection
                </div>
              </div>
            </div>
          </div>
        ))}
    </Carousel>
    </div>
  );
};

export default Gifts;