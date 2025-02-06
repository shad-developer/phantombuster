import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center lg:py-20 bg-color">
      <div className="container mx-auto py-14 md:py-20 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800">
          More Leads, <br />
          <span className="text-primary">Less Effort</span>
        </h1>
        <p className="mt-4 font-bold text-gray-600 uppercase">
          Automate what you're already doing, on the platforms you already use
        </p>
        <div className="mt-6">
          <div className="max-w-md mx-auto mt-6 md:relative">
            {/* Input field */}
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-4 pr-32 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Enter your email"
            />

            {/* Button */}
            <button
              className="w-full mt-4 md:mt-0 md:w-auto md:absolute md:right-1 md:top-1 md:bottom-1 bg-primary text-white text-sm md:text-base rounded-full px-4 py-2 font-semibold transition-colors duration-300 hover:bg-primary-dark"
              aria-label="Start free trial"
            >
              Start free trial
            </button>
          </div>

          <p className="mt-5 text-gray-400">No credit card required</p>
          <AiOutlineDown className="flex items-center justify-center w-full mt-5 text-gray-400 text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
