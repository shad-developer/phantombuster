import React from "react";
import germinal from "../../assets/images/germinal.png";
import pinterest from "../../assets/images/pinterest.png";
import qonto from "../../assets/images/qonto.png";
import side from "../../assets/images/side.png";
import swapcard from "../../assets/images/swapcard.png";
import upflow from "../../assets/images/upflow.png";

const logos = [germinal, qonto, pinterest, side, swapcard, upflow]; // Store logos in an array

const Busineses = () => {
  return (
    <div className="container flex items-center flex-col justify-center py-10 ">
      <p className="uppercase text-primary font-bold pb-10 text-center">
        Trusted by 100,000+ businesses
      </p>
      <div className="w-full py-5 relative">
        <div className="flex flex-wrap  items-center justify-center lg:justify-between gap-8 md:gap-12 px-4 md:px-0">
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Business logo"/>
          ))}
        </div>
      </div>
    </div> 
    
  );
};

export default Busineses;
