import React from "react";
import { FaArrowRight } from "react-icons/fa";

const TabContent = ({ title, shortDescription, description, imageSrc }) => {
  return (
    <div className="tab-panel flex items-center justify-between">
    <div className="max-w-lg">
      <h2 className="text-5xl font-bold">{title}</h2>
      <p className="mt-2 leading-relaxed font-semibold">
       {shortDescription}
      </p>
      <p className="mt-5">
       {description}
      </p>
      <p className="flex items-center gap-2 py-5 font-bold  text-primary">
        Learn More <FaArrowRight />
      </p>
    </div>
    <div>
      <img src={imageSrc} alt="" />
    </div>
  </div>
  );
};

export default TabContent;