"use client";
import "./globals.css"
import React, { useState } from "react";
import Cards from "./cards/page";
import Gift from "./gift/page";
import Switch from "@mui/material/Switch";
export default function Home() {
  const [ispresent, setIsPresent] = useState(true); // Initial state for ispresent

  const handleToggle = () => {
    setIsPresent(!ispresent); // Update ispresent on toggle
  };

  return (
    <main className={`maim flex items-center w-screen h-full justify-between ${ispresent ? 'bg-[#292B32]' : 'bg-[#F7F7F8]'}`}>
      <div className="m-auto w-[100%]">
      <div className="flex items-center justify-end pr-8">
        <Switch checked={ispresent} onChange={handleToggle} /> 
      </div>
          <Cards ispresent={ispresent}/>
          <Gift ispresent={ispresent} />
      </div>
    </main>
  );
}
