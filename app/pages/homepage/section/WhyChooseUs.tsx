import { cameraMan, circle } from "@/public/img";

function WhyChooseUs() {
  return (
    <div className="grid  justify-self-center lg:justify-self-start lg:justify-items-start justify-items-center lg:grid-cols-2">
      <div className=" bg-cover relative object-contain min-h-[500px] bg-center h-full w-full">
        <div className="bg-gray-400 animate-pulse flex justify-center items-center w-full h-full">
          Image Loading.....
        </div>
        <div
          style={{ backgroundImage: `url(${cameraMan.src})` }}
          className="absolute bg-cover bg-no-repeat bg-centeru top-0 w-full h-full"
        ></div>
      </div>
      <div
        className=" bg-cover bg-no-repeat flex flex-col w-full bg-center lg:p-4 py-12"
        style={{ backgroundImage: `url(${circle.src})` }}
      >
        <p className="text-5xl  font-medium">Why Choose Us?</p>
        <div>
          <section className="flex flex-col w-full">
            {/*  */}
            <div className="grid gap-5 lg:grid-cols-2 w-full">
              <div className="flex gap-2 justify-start items-start mt-10">
                <p className="text-3xl font-medium text-pry-dark ">01</p>
                <div>
                  <p className="font-bold text-xl">Tailored Strategies</p>
                  <p className="font-light text-lg">
                    Access to a trusted network of professional journalists
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-start mt-10">
                <p className="text-3xl font-medium text-pry-dark ">02</p>

                <div>
                  <p className="font-bold text-xl">Delivery Strategy</p>
                  <p className="font-light text-lg">
                    Access to a trusted network of professional journalists
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid gap-5 lg:grid-cols-2 w-full">
              <div className="flex gap-2 justify-start items-start mt-10">
                <p className="text-3xl font-medium text-pry-dark ">03</p>
                <div>
                  <p className="font-bold text-xl">Proven Track Record</p>
                  <p className="font-light text-lg">
                    Access to a trusted network of professional journalists
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-start mt-10">
                <p className="text-3xl font-medium text-pry-dark ">04</p>

                <div>
                  <p className="font-bold text-xl">Powered By Passion</p>
                  <p className="font-light text-lg">
                    Access to a trusted network of professional journalists
                  </p>
                </div>
              </div>
            </div>

            {/*  */}
            <div className="grid gap-5 lg:grid-cols-2 w-full">
              <div className="flex gap-2 justify-start items-start mt-10">
                <p className="text-3xl font-medium text-pry-dark ">05</p>
                <div>
                  <p className="font-bold text-xl">Creative Excellence</p>
                  <p className="font-light text-lg">
                    Access to a trusted network of professional journalists
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-start items-start mt-10">
                <p className="text-3xl font-medium text-pry-dark ">06</p>

                <div>
                  <p className="font-bold text-xl">Industry Expertise</p>
                  <p className="font-light text-lg">
                    Access to a trusted network of professional journalists
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
