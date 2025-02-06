import React, { useState } from "react";
import Card from "../Cards/TabCard";
import cardData from "./TabContents/CardData";
import { FaSitemap, FaPlug } from "react-icons/fa";
import { LiaGhostSolid } from "react-icons/lia";

const Tools = () => {
  const [activeTab, setActiveTab] = useState("A");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-color">
      <div className="container py-10 mt-5">
        <div>
          <h1 className="text-4xl font-bold text-center">Explore our Tools</h1>
        </div>
        <div className="max-w-5xl py-10 mx-auto">
          {/* Tab buttons */}
          <div className="flex space-x-5 mb-2">
            <button
              className={`flex items-center justify-center gap-2 flex-1 py-3 text-lg font-semibold transition-colors duration-300 rounded-lg ${
                activeTab === "A"
                  ? "bg-white text-black shadow-lg"
                  : "bg-[#f8f5f3] text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleTabClick("A")}
            >
              <LiaGhostSolid className="text-xl" /> Phantom
            </button>
            <button
              className={`flex items-center justify-center gap-2 flex-1 py-3 text-lg font-semibold transition-colors duration-300 rounded-lg ${
                activeTab === "B"
                  ? "bg-white text-black shadow-lg"
                  : "bg-[#f8f5f3] text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleTabClick("B")}
            >
              <FaSitemap className="text-xl" /> Flows
            </button>

            <button
              className={`flex items-center justify-center gap-2 flex-1 py-3 text-lg font-semibold transition-colors duration-300 rounded-lg ${
                activeTab === "C"
                  ? "bg-white text-black shadow-lg"
                  : "bg-[#f8f5f3] text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => handleTabClick("C")}
            >
              <FaPlug className="text-xl" /> Integration
            </button>
          </div>
          {/* Tab content */}
          <div className="p-4 rounded-md mt-5">
            {activeTab === "A" && (
              <div className="tab-panel">
                <div className="flex justify-center w-full">
                  <p className="mt-2 mb-5 text-gray-400">
                    {cardData.A.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                  {cardData.A.cards.map((card, index) => (
                    <Card
                      key={index}
                      tag={card.tag}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      slots={card.slots}
                      onClick={card.onClick}
                    />
                  ))}
                </div>
              </div>
            )}
            {activeTab === "B" && (
              <div className="tab-panel">
                <div className="flex justify-center w-full">
                  <p className="mt-2 mb-5 text-gray-400">
                    {cardData.B.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                  {cardData.B.cards.map((card, index) => (
                    <Card
                      key={index}
                      tag={card.tag}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      slots={card.slots}
                      onClick={card.onClick}
                    />
                  ))}
                </div>
              </div>
            )}
            {activeTab === "C" && (
              <div className="tab-panel">
                <div className="flex justify-center w-full">
                  <p className="mt-2 mb-5 text-gray-400">
                    {cardData.C.description}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                  {cardData.C.cards.map((card, index) => (
                    <Card
                      key={index}
                      tag={card.tag}
                      icon={card.icon}
                      title={card.title}
                      description={card.description}
                      slots={card.slots}
                      onClick={card.onClick}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center mt-20">
            <button className="py-2 px-8 text-white border-2 border-blue-500 rounded-full bg-blue-500 hover:bg-blue-600">
              Browse more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
