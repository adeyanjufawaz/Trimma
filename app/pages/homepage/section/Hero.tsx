import { leftRectangle, team } from "@/public/img";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="grid gap-6 mt-20 lg:mt-0  md:grid-cols-2 grid-cols-1 ">
      <div className="flex  lg:py-32 lg:mt-0 relative flex-col justify-center ">
        <Image
          src={leftRectangle}
          alt="{leftt Rectangle"
          className="absolute top-[15%] right-[25%] h-2/4 w-[35%]"
        />
        <h2 className="z-1 font-medium text-2xl">We are a </h2>
        <h1 className="lg:text-9xl z-1 text-7xl font-mono font-bold">
          Media Agency
        </h1>
        <span className="font-normal z-1 mt-4 italic text-xl ">
          “Grow Your Brand. Master the Media. Join the Future of Journalism.”
        </span>
        <section className="z-1 mt-6 flex gap-3">
          <button
            className={`w-44 p-3 rounded-2xl text-base text-white bg-pry-dark`}
          >
            Get PR Help
          </button>
          <button
            className={`w-44 p-3 rounded-2xl text-base  text-pry-dark border border-pry-dark bg-white/95`}
          >
            Join Training Now
          </button>
        </section>
      </div>
      <div className="min-h-96 w-full relative  bg-no-repeat">
        <div className="bg-gray-400 animate-pulse flex justify-center items-center w-full h-full">
          Image Loading.....
        </div>
        <div
          style={{ backgroundImage: `url(${team.src})` }}
          className="absolute bg-cover bg-no-repeat bg-center top-0 w-full h-full"
        ></div>
      </div>
    </div>
  );
}

export default Hero;