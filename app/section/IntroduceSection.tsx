import React from "react";
import IntroCard from "../component/IntroCard";
import { user1 } from "@/public/img";

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
        <IntroCard user="1" />
        <IntroCard user="2" />
        <IntroCard user="1" />
        <IntroCard user="2" />
      </div>
    </div>
  );
}

export default IntroduceSection;
