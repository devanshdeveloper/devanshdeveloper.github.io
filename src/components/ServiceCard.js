import Image from "next/image";
import React from "react";

function ServiceCard({ name, img, description }) {
  return (
    <div className="bg-dark-900 text-white rounded-lg p-10 border hover:border-brand-dark transition-all duration-200 flex flex-col gap-5">
      <div className="flex justify-center">
        <Image src={`/${img}.png`}  height={150} width={300} />
      </div>
      <h3 className="font-medium text-center text-lg">{name}</h3>
      {/* <p dangerouslySetInnerHTML={{ __html: description }}></p> */}
    </div>
  );
}

export default ServiceCard;
