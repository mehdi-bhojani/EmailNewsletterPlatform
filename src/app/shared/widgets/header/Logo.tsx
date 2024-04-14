import React from "react";
import logo from "@/app/assets/images/BirdFlying.png";
import Image from "next/image";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Image className="w-12 h-12" src={logo} alt="logo" />
      <h1 className="text-blue-500 text-xl font-bold uppercase ">
        PegionPulse
      </h1>
    </div>
  );
}

export default Logo;
