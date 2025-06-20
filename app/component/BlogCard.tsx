import { blog, date } from "@/public/img";
import Image from "next/image";
import React from "react";

function BlogCard({blogTitle}:{blogTitle:string}) {
  return (
    <div className="max-w-full md:max-w-[30%] lg:max-w-[30%]  w-full">
      <div className="w-full relative">
        <Image src={blog} alt="Blog Image" />
        <Image src={date} alt="Calender" className="absolute top-3 left-10" />
      </div>
      <p className="font-medium text-white text-left text-2xl">{blogTitle}</p>
      <button className="mt-6 bg-pry-dark rounded-full text-base text-white px-5 py-2">Read now</button>
    </div>
  );
}

export default BlogCard;
