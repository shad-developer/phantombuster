import React from "react";
import { FaLinkedin, FaPen, FaEnvelope } from "react-icons/fa";

const Card = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Header with icons */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaLinkedin className="text-blue-600 text-2xl" />
          <FaPen className="text-blue-600 text-2xl" />
          <FaEnvelope className="text-blue-600 text-2xl" />
        </div>
        <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded-md">1 slot</span>
      </div>

      {/* Tag */}
      <span className="text-xs font-medium text-blue-500 bg-blue-100 py-1 px-2 rounded-full mb-4 inline-block">
        Flow
      </span>

      {/* Title */}
      <h3 className="text-lg font-bold mb-2">LinkedIn Search to Profile Data</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia architecto rerum adipisci officia numquam, sunt deserunt tempore distinctio accusamus temporibus accusantium maxime debitis pariatur enim, totam optio at eaque odit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius sequi officiis aperiam sed voluptas, hic possimus expedita pariatur, voluptates ullam mollitia sint vitae. Quisquam, eligendi debitis quod non nulla minus.</p>

      {/* Button */}
      <button className="w-full py-2 font-bold text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
        Discover more
      </button>
    </div>
  );
};

export default Card;
