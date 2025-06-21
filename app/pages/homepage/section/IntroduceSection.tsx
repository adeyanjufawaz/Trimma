import React from "react";
import IntroCard from "../../../component/homepage/IntroCard";
import { user1, user2, user3, user4 } from "@/public/img";

const ExpertList = [
  {
    name: "",
    role: "",
    images: "",
  },
];

function IntroduceSection() {
  return (
    <div className="flex flex-col mb-10 justify-center items-center text-center mt-10 md:mt-20">
      <p className="text-pry-dark uppercase text-xl font-medium">
        Introduce yourself to{" "}
      </p>
      <h2 className="mt-6 lg:w-1/2 font-semibold text-4xl">
        Our Team of Featured Expert Journalists
      </h2>
      <div className="grid gap-4 mt-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div
          className=" h-56 w-56 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url(${user1.src})` }}
        ></div>
        <div
          className=" h-56 w-56 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url(${user2.src})` }}
        ></div>
        <div
          className=" h-56 w-56 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url(${user3.src})` }}
        ></div>
        <div
          className=" h-56 w-56 bg-no-repeat bg-contain bg-center"
          style={{ backgroundImage: `url(${user4.src})` }}
        ></div>
        
      </div>
    </div>
  );
}

export default IntroduceSection;
