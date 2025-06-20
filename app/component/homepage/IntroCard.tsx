import { user1,user2 } from "@/public/img";
import React from "react";
interface introCardTYpe {
  img: string;
  fullName: string;
  role: string;
}

function IntroCard({user}:{user:string}) {
  return (
    <div
      className=" h-56 w-56 bg-no-repeat bg-contain bg-center"
      style={user == "1" ? { backgroundImage: `url(${user1.src})`} : { backgroundImage: `url(${user2.src})`}}
    ></div>
  );
}

export default IntroCard;
