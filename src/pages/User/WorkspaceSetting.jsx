import React, { useState } from "react";
import { FaHubspot } from "react-icons/fa";
import Select from "react-select";
import SelectCountry from "react-select-country-list";
import moment from "moment-timezone";

const WorkspaceSettings = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [workspaceName, setWorkspaceName] = useState("Umair Workspace");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [vatId, setVatId] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [selectedTimezone, setSelectedTimezone] = useState(null);
  const [isMemberActive, setIsMemberActive] = useState(true); // State for toggle

  const timezones = moment.tz.names().map((tz) => ({
    value: tz,
    label: tz,
  }));

  const countryOptions = SelectCountry().getData();

  const handleSaveSettings = () => {
    console.log("Settings saved");
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-8 max-w-7xl">
        <h1 className="text-3xl font-semibold mb-6">Workspace Settings</h1>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {/* First Column */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Information</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Workspace Name</label>
                  <input
                    type="text"
                    value={workspaceName}
                    onChange={(e) => setWorkspaceName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Enter workspace name"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Time Zone</label>
                  <Select
                    value={selectedTimezone}
                    onChange={(option) => setSelectedTimezone(option)}
                    options={timezones}
                    placeholder="Select a timezone..."
                    isClearable
                  />
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button className="text-blue-600 text-sm hover:underline">Change Email Address</button>
                <button className="text-blue-600 text-sm hover:underline">Change Password</button>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">General Information</h2>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">First Name</label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Enter your first name"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Last Name</label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 mt-4">
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Optional"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Company</label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Optional"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-gray-700 block mb-2">Street Address</label>
                <input
                  type="text"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                  placeholder="Optional"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5 mt-5">
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Zip / Postal Code</label>
                  <input
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Optional"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                    placeholder="Optional"
                  />
                </div>
                <div className="flex-1">
                  <label className="text-gray-700 block mb-2">Country</label>
                  <Select
                    value={selectedCountry}
                    onChange={(option) => setSelectedCountry(option)}
                    options={countryOptions}
                    placeholder="Country..."
                    isClearable
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="text-gray-700 block mb-2">VAT ID</label>
                <input
                  type="text"
                  value={vatId}
                  onChange={(e) => setVatId(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                  placeholder="Optional"
                />
              </div>
              <div className="mt-5">
                <label className="text-gray-700 block mb-2">Additional Invoice Information</label>
                <input
                  type="text"
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                  placeholder="Optional"
                />
              </div>
            </div>
            <div className="flex justify-between items-center border-t pt-6">
              <button className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500 transition">
                Workspace Catalog
              </button>
              <button
                onClick={handleSaveSettings}
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-500 transition"
              >
                Save Settings
              </button>
            </div>
          </div>
          {/* Second Column */}
          <div className="bg-gray-50 min-h-screen flex justify-center mt-6 md:mt-0">
            <div className="w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
              {/* Info Banner */}
              <div className="bg-blue-50 border-l-4 border-blue-400 text-blue-700 p-4 mb-6 rounded">
                <p className="text-sm">
                  This is your private workspace. Invite team members by creating a shared workspace.
                  <a href="#" className="text-blue-500 underline ml-1">Learn more →</a>
                </p>
              </div>
              {/* Workspace Members */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Workspace Members</h2>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                  <div>
                    <p className="font-semibold">Umair Ch</p>
                    <p className="text-sm text-gray-500">gimipoc982@konetas.com</p>
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isMemberActive}
                        onChange={() => setIsMemberActive(!isMemberActive)} // Toggle the state
                        className="toggle-checkbox hidden"
                      />
                      <span className={`toggle-label ${isMemberActive ? 'bg-green-500' : 'bg-gray-400'} rounded-full w-12 h-6 relative`}>
                        <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${isMemberActive ? 'transform translate-x-6' : ''}`}></span>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              {/* CRM Integration */}
              <div className="space-y-4 mt-6">
                <h2 className="text-xl font-semibold">CRM Integration</h2>
                <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <FaHubspot className="text-orange-500 text-4xl" />
                    <a href="#" className="text-sm text-blue-500 underline">How to use with PhantomBuster</a>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Connect</button>
                </div>
              </div>
              {/* Third Party API Keys */}
              <div className="space-y-4 mt-6">
                <h2 className="text-xl font-semibold">Third Party API Keys</h2>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">+ Add API Key</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceSettings;