import {
  allStars,
  circle,
  face,
  leftRectangle,
  longrectangle,
  yellowDash,
} from "@/public/img";
import Image from "next/image";
import React from "react";

function ClientFeedBackSection() {
  return (
    <div className="grid mt-18 relative text-[#2B2B2B] gap-10 grid-cols-1 lg:grid-cols-2">
      <div
        className="py-18 bg-contain bg-no-repeat  "
        style={{ backgroundImage: `url(${circle.src})` }}
      >
        <div>
          <Image
            src={longrectangle}
            alt="leftRectangle"
            className="absolute -z-1 lg:z-1 md:right-[5%] lg:right-[40%] top-[2%] h-2/6 lg:h-3/4 "
          />
        </div>
        <h2 className="text-4xl lg:w-3/5 font-semibold">
          Look What Our Clients Say!
        </h2>
        <p className="text-base font-normal mt-6">
          Read convincing reports from our customers.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-md w-full md:w-4/5 p-4 px-10  ">
          <Image src={yellowDash} alt="TYellow Dash" />
          <h4 className="font-medium text-xl mt-10 pb-6 border-b border-b-[#D4D4D4] ">
            From the moment we connected with Ibrahim Amodu and TRIMAA at large,
            we felt heard. He didn’t just offer a service , he offered genuine
            partnership. The dedication he showed in helping us bring our story
            to life was deeply appreciated. We’re not just satisfied; we’re
            truly grateful.
          </h4>
          <div className="mt-8 flex justify-end items-center gap-5">
            <div className="flex gap-3">
              <Image src={face} alt="face" className="h-full p-1" />
              <div>
                <h4 className="text-xl font-medium">Mallam Abdul Kyari</h4>
                <p className="text-xs font-normal mt-3">
                  DG. Nigeria Communications Commisions
                </p>
              </div>
            </div>
            <div>
              <Image src={allStars} alt="All Stars" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientFeedBackSection;
