import Image from "next/image";
import React from "react";

function ServiceCard({ name, img, description }) {
  return (
    <div className="bg-dark-900 text-white rounded-lg p-7 group border hover:border-brand-dark hover:scale-110 transition-all duration-300 flex flex-col gap-5 items-center shadow-2xl">
      {img && (
        <Image
          src={`/services/${img}.png`}
          className="w-5/6 object-contain aspect-[3/2]"
          height={150}
          width={300}
        />
      )}
      <h3 className="font-medium text-center text-lg group-hover:text-brand-default transition-all duration-300">{name}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>
    </div>
  );
}

export default ServiceCard;
