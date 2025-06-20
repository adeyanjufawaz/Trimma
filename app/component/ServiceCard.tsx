import Image from "next/image";

interface serviceProp<T> {
  icon: T;
  header: T;
  content: T;
}

function ServiceCard({ icon, header, content }: serviceProp<string>) {
  return (
    <div
      style={{ boxShadow: "4px 10px 30px rgba(0, 0, 0, 0.1)" }}
      className="flex flex-col bg-white max-w-64 max-h-80 text-center rounded-2xl px-4 py-10 justify-center items-center "
    >
      <div className="w-20 h-20 flex justify-center items-center rounded-full p-2 bg-pry-dark ">
        <Image src={icon} alt="SercviceIcon" className="h-full" />
      </div>
      <h4 className="text-lg mt-5 font-medium">{header}</h4>
      <p className="font-normal mt-1 w-5/6 text-grey-dark text-base">{content}</p>
    </div>
  );
}

export default ServiceCard;
