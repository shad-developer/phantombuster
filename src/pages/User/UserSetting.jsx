import React, { useState } from "react";

const UserSettings = () => {
  const [firstName, setFirstName] = useState("Umair");
  const [lastName, setLastName] = useState("Ch");
  const [company, setCompany] = useState("Tech");
  const [email, setEmail] = useState("gimipoc982@konetes.com");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isContactable, setIsContactable] = useState(true);
  const [developerMode, setDeveloperMode] = useState(false);

  const handleSaveSettings = () => {
    // Add logic to save settings
    console.log("Settings saved");
  };

  return (
    <div className="bg-color">
      <div className="container mx-auto p-8 max-w-7xl">
        <h1 className="text-2xl font-semibold mb-6">User settings</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Login information</h2>
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="text-gray-700 block mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-700 block mb-2">Password</label>
                <input
                  type="password"
                  value="********"
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full bg-gray-100 cursor-not-allowed"
                  disabled
                />
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button className="text-blue-500 text-sm">
                Change email address
              </button>
              <button className="text-blue-500 text-sm">Change password</button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">General information</h2>
            <div className="flex gap-6">
              <div className="flex-1">
                <label className="text-gray-700 block mb-2">First name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                />
              </div>
              <div className="flex-1">
                <label className="text-gray-700 block mb-2">Last name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 mt-1 w-full"
                />
              </div>
            </div>
            <div className="flex gap-6 mt-4">
              <div className="flex-1">
                <label className="text-gray-700 block mb-2">Phone number</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
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
          </div>

          <div className="mb-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={isContactable}
                onChange={(e) => setIsContactable(e.target.checked)}
                className="mr-2"
              />
              <label className="text-gray-700">
                It is okay to contact me by email
              </label>
              <span className="text-gray-400 ml-2 text-sm">Optional</span>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                checked={developerMode}
                onChange={(e) => setDeveloperMode(e.target.checked)}
                className="mr-2"
              />
              <label className="text-gray-700">Enable developer mode</label>
              <span className="text-gray-400 ml-2 text-sm">Optional</span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              Stay up-to-date with our latest Phantoms & features. We promise
              not to spam you. Your email will not be shared with any third
              party.
            </p>
          </div>

          <div className="flex justify-between items-center border-t pt-6">
            <button
              onClick={() => console.log("Logging out from all sessions")}
              className="text-red-500 text-sm"
            >
              Log out from all sessions
            </button>
            <button
              onClick={handleSaveSettings}
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
            >
              Save settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
