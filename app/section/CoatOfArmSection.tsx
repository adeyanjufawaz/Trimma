import { coatofarm, Corporate, rightRectangle } from "@/public/img";
import Image from "next/image";

function CoatOfArmSection() {
  return (
    <div className="pb-10">
      <div className=" flex gap-5 w-full">
        <div className="max-h-30 flex w-[15%] ">
          {/* className=" bg-cover flex flex-col w-full bg-center p-4 py-12"
        style={{ backgroundImage: `url(${circle.src})` }} */}
          <Image src={coatofarm} alt="coatofArm" className="h-full  w-full" />
        </div>
        <div
          className=" flex justify-center items-center bg-contain bg-no-repeat bg-center w-full  "
          style={{ backgroundImage: `url(${Corporate.src})` }}
        >
          {/* <p className="text-grey-light font-medium text-xl md:text-5xl">
            Corporate Affairs Commissions Certifed
          </p> */}
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 md:gap-2  mt-14 ">
        <div className="relative ">
          <Image
            src={rightRectangle}
            alt="left rectangle"
            className="absolute top-[15%] right-0 -z-5 h-3/4 w-full"
          />
          <div className="z-99">
            <p className="text-3xl ">
              Based in Nigeria, we are a dynamic agency delivering innovative
              media solutions.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-5 items-center">
          <div className="bg-pry-dark flex justify-center items-center rounded-full p-6 md:p-10">
            <p className="text-3xl text-white">12</p>
          </div>
          <p className="text-xl font-medium">
            years of professional experience of defining and refining the
            landscape and ecosystem of media and digital agency, effectively.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoatOfArmSection;
