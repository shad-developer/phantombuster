import React from "react";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import logo from "../../assets/images/Logo.png";

const Whyus = () => {
  return (
    <>
       <div className="bg-color">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold py-10 text-center">
          Why PhantomBuster?
        </h1>

        {/* First section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Text Block */}
          <div className="md:w-1/2">
            <p className="text-primary">Powerful lead gen solutions</p>
            <h1 className="text-3xl font-bold mt-2">
              Automate your data collection and outreach
            </h1>
            <ul className="mt-4 space-y-2 font-bold">
              <li>
                <span className="text-green-500">&#10004;</span> 100+ ready-made
                automations
              </li>
              <li>
                <span className="text-green-500">&#10004;</span> Prebuilt
                workflows for all your goals
              </li>
              <li>
                <span className="text-green-500">&#10004;</span> Integrations
                with your favorite tools
              </li>
            </ul>
          </div>

          {/* Image Block */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img1}
              alt="Lead Gen Solutions"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Second section (reversed) */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center py-8">
          {/* Image Block */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img2}
              alt="Automation Tools"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text Block */}
          <div className="md:w-1/2">
            <p className="text-primary">
              Code-free & automaticCode-free & automatic
            </p>
            <h1 className="text-3xl font-bold mt-2">
              High-quality leads in minutes, not hours
            </h1>
            <ul className="mt-4 space-y-2 font-bold">
              <li>
                <span className="text-green-500">&#10004;</span> Leverage
                code-free tools that can be used by anyone
              </li>
              <li>
                <span className="text-green-500">&#10004;</span> Organize your
                leads in one place, supercharged by AI
              </li>
              <li>
                <span className="text-green-500">&#10004;</span> Save hours
                spent on repetitive tasks
              </li>
            </ul>
          </div>
        </div>

        {/* third section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          {/* Text Block */}
          <div className="md:w-1/2">
            <p className="text-primary">ACCELERATE AT SCALE</p>
            <h1 className="text-3xl font-bold mt-2">
              Trusted by 100,000+ businesses
            </h1>
            <ul className="mt-4 space-y-2 font-bold">
              <li>
                <span className="text-green-500">&#10004;</span> Personalize
                your outreach campaigns
              </li>
              <li>
                <span className="text-green-500">&#10004;</span> Source contact
                data (including emails)
              </li>
              <li>
                <span className="text-green-500">&#10004;</span> Import data
                seamlessly to any CRM
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={img3}
              alt="Automation Tools"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* fourth section */}
        <div className="flex justify-center">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between bg-white p-5 w-full lg:w-2/4 rounded-xl">
            <div className="form-section">
              <h1 className="text-3xl font-bold">
                Ready to boost your growth?
              </h1>
              <p className="text-gray-500 mt-2">
                14 days free trial -no credit card required
              </p>

              <div className="mt-6 md:relative">
                {/* Input field */}
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-200 pl-4 pr-32 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
            </div>
            <div className="img-section">
              <img src={logo} className="h-24 w-auto" />
            </div>
          </div>
        </div>
        </div>
        </div>
    </>
  );
};

export default Whyus;
