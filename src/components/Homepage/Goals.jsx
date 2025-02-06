import React, { useState } from "react";
import Img1 from "../../assets/images/leads_tab1.png";
import Img2 from "../../assets/images/enrich_tab2.png";
import Img3 from "../../assets/images/campaigns_tab3.png";
import TabContent from "./TabContents/TabContent";
const Goals = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = {
    1: {
      title: "Extract lists of leads",
      shortDescription: "Source qualified leads from any corner of the web.",
      description:
        "Source qualified leads from any corner of the web.Let our Phantoms generate masses of leads right from where you find them, then export them into a simple spreadsheet. Gather your ideal targets 24/7 to drive your revenue and growth goals on autopilot.",
      imageSrc: Img1,
    },
    2: {
      title: "Enrich with data & emails",
      shortDescription:
        "Fill the gaps in your database with contact enrichment.",
      description:
        "Fill the gaps in your database with contact enrichment. Take things one step further and fully enrich the leads you extract with Phantom. Build an accurate picture of your targets, complete with phone numbers and verified email addresses you can rely on.",
      imageSrc: Img2,
    },
    3: {
      title: "Send outreach campaigns",
      shortDescription: "Automate your outreach campaigns at scale.",
      description:
        "Automate your outreach campaigns at scale. Build highly personalized outreach campaigns to warm up your leads on socials and shine the spotlight on your business. Monitor your success over time to make smarter moves and stay ahead of the game.",
      imageSrc: Img3,
    },
  };

  return (
    <div className="bg-color">
    <div className="container py-10 mt-5">
      <div>
        <h1 className="text-4xl font-bold text-center">
          One Solution for all your goals
        </h1>
      </div>

      {/* Tabs here */}
      <div className="max-w-5xl py-10 mx-auto">
        {/* Tab buttons */}
        <div className="flex space-x-5 mb-2">
          <button
            className={`flex-1 py-3 text-sm md:text-lg font-semibold transition-colors duration-300 rounded-lg ${
              activeTab === 1
                ? "bg-white text-black shadow-lg"
                : "bg-[#f8f5f3] text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick(1)}
          >
            Extract lists of leads
          </button>

          <button
            className={`flex-1 py-3  text-sm md:text-lg font-semibold transition-colors duration-300 rounded-lg ${
              activeTab === 2
                ? "bg-white text-black shadow-lg"
                : "bg-[#f8f5f3] text-gray-700 hover:bg-gray-200 "
            }`}
            onClick={() => handleTabClick(2)}
          >
            Enrich data & emails
          </button>

          <button
            className={`flex-1 py-3  text-sm md:text-lg font-semibold transition-colors duration-300 rounded-lg ${
              activeTab === 3
                ? "bg-white text-black shadow-lg "
                : "bg-[#f8f5f3] text-gray-700 hover:bg-gray-200 "
            }`}
            onClick={() => handleTabClick(3)}
          >
            Send outreach campaigns
          </button>
        </div>

        {/* Tab content */}
        <div className="p-4 rounded-md mt-5">
          <TabContent
            title={tabData[activeTab].title}
            shortDescription={tabData[activeTab].shortDescription}
            description={tabData[activeTab].description}
            imageSrc={tabData[activeTab].imageSrc}
          />
        </div>
      </div>
      </div>
      </div>
  );
};

export default Goals;
