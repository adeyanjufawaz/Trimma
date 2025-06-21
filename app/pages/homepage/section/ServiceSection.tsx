import React from "react";
import { serviceData } from "../../../utilities/serviceData";
import ServiceCard from "../../../component/homepage/ServiceCard";
function ServiceSection() {
  return (
    <div className="pt-10 p-4 flex justify-center items-center text-center flex-col">
      <p className="text-pry-dark font-medium text-xl">OUR SERVICES</p>
      <h2 className="font-semibold text-5xl my-6">Exlclusive services we offer</h2>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-5 p-8 mx-auto ">
        {serviceData.map((data, ind) => (
          <ServiceCard
            key={ind}
            icon={data.icon}
            header={data.header}
            content={data.content}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
