import React from "react";

const TabCard = ({ icon, title, description, tag, slots, onClick }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-h-82 flex flex-col justify-between">
      {/* Icon and Slot Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {icon.map((Icon, index) => (
              <Icon key={index} className="text-primary text-3xl" />
            ))}
          </div>
          <span className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded-md">
            {slots} Slot{slots > 1 ? "s" : ""}
          </span>
        </div>

        {/* Tag, Title, and Description */}
        <div className="flex-grow">
          <span className="text-xs font-medium text-blue-500 bg-blue-100 py-1 px-2 rounded-full mb-4 inline-block">
            {tag}
          </span>
          <h3 className="text-lg font-bold mb-2">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {/* Discover More Button */}
      <div className="mt-auto pt-4">
        <button className="w-full py-2 text-blue-500 border-2 border-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default TabCard;
