import { facebook, instagram, linkedIn, trimma, twitter } from "@/public/img";
import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="mt-10 grid py-12 grid-cols-1 gap-10 md:grid-cols-[1fr_1.4fr] lg:grid-cols-[1fr_1.2fr]">
      <div className=" p-6">
        <Image src={trimma} alt="Trimma Logo" />
        <p className="text-base font-light my-5">
          We are committed to providing outstanding media solutions that not
          only meet your expectations but exceed them{" "}
        </p>
        <div className="flex gap-4">
          <Image
            src={linkedIn}
            alt="LinkedIn"
            className="w-6 cursor-pointer h-6"
          />
          <Image
            src={facebook}
            alt="facebook"
            className="w-6 cursor-pointer h-6"
          />
          <Image
            src={twitter}
            alt="twitter"
            className="w-6 cursor-pointer h-6"
          />
          <Image
            src={instagram}
            alt="instagram"
            className="w-6 cursor-pointer h-6"
          />
        </div>
      </div>
      <div className=" p-2 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-xl font-semibold">Navigation</p>
          <div className="mt-4">
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Home</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >About</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Listings</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Services</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Blogs</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Work with us</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">License</p>
          <div className="mt-4">
            <p className="text-base mt-2 font-light text-[#2B2B2B]" > Privacy Policy</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Copyright</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >C.A.C Certificate</p>
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">Navigation</p>
          <div className="mt-4 flex flex-col flex-wrap">
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Sungold Estate, Galadimawa , Nigeria.</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >+1 206-214-2298</p>
            <p className="text-base mt-2 font-light text-[#2B2B2B]" >Trimaa200910@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
