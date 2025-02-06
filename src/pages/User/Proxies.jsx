import React from "react";
import Img from '../../assets/images/leads_tab1.png';

const Proxies = () => {
  return (
    <div className="container flex justify-center items-center min-h-screen bg-color">
      <div className="flex bg-white p-8 rounded-lg shadow-lg  w-full">
        {/* Content Section */}
        <div className="flex-1">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Connect external proxies
          </h1>
          {/* Description */}
          <p className="text-gray-600 mb-6">
            Using a proxy with PhantomBuster will root your Phantoms' launches in a
            particular geographic location. A well-positioned, reliable proxy can
            help you to:
          </p>
          {/* Benefits list */}
          <ul className="list-none text-gray-700 space-y-2 mb-6">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Keep your Phantoms' launches close to you
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Make your automation less detectable
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Protect your social accounts
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              Reach the full potential of your Phantoms
            </li>
          </ul>
          {/* Help Center link */}
          <p className="text-blue-600 mb-6">
            For more information,{" "}
            <a
              href="#"
              className="underline hover:text-blue-800"
            >
              visit our Help Center.
            </a>
          </p>
          {/* Buttons */}
          <div className="flex space-x-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              + New proxy pool
            </button>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600">
              Import
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="ml-4">
          <img
            className="w-full h-auto object-cover"
            src={Img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Proxies;