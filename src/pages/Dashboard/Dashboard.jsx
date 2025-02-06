import React from "react";

const Dashboard = () => {
  return (
    <div className="bg-color">
      <div className="container mx-auto py-32 px-8 max-w-7xl">
        <h1 className="text-3xl font-bold mb-6">
          Dashboard <span className="text-gray-500 text-lg">0 / 5 slots</span>
        </h1>

        <div className="grid grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="col-span-1">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">
                Start with the basics
              </h2>
              <div className="mb-4">
                <div className="h-2 bg-blue-200 rounded-full mb-4">
                  <div
                    className="h-full bg-blue-500 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>
                <ul className="text-sm text-gray-700">
                  <li className="flex items-center mb-2">
                    <span className="text-green-500">✔️</span>
                    <span className="line-through ml-2">Create an account</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-green-500">✔️</span>
                    <span className="line-through ml-2">
                      Confirm your email
                    </span>
                  </li>
                  <li className="flex items-center mb-2">
                    <span className="text-gray-500">⭕</span>
                    <span className="ml-2">
                      Install PhantomBuster extension
                    </span>
                    <a href="#" className="text-blue-500 ml-2 text-sm">
                      Download – Why?
                    </a>
                  </li>
                  <li className="flex items-center">
                    <span className="text-gray-500">⭕</span>
                    <span className="ml-2">
                      Launch your first Phantom or Flow
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2 flex flex-col justify-center items-center bg-white shadow-md rounded-lg p-6 border-dashed border-2 border-gray-300">
            <div className="text-center">
              <p className="text-2xl font-semibold mb-2">5 slots available</p>
              <p className="text-gray-500 mb-6">
                You don't have anything installed on your dashboard at the
                moment. Check out our Phantoms & Flows to start automating your
                lead generation.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                Browse Phantoms
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
