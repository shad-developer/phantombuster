import React, { useState } from 'react';
import Select from "react-select";
import SelectCountry from "react-select-country-list";

const PaymentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [selectedCountry, setSelectedCountry] = useState(null);
  const countryOptions = SelectCountry().getData();
    
  return (
    <div className="fixed z-30 inset-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <span className="material-icons">close</span>
        </button>
        <h2 className="text-2xl font-bold mb-6">Add payment information</h2>

        {/* Payment Information Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name on card</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Name" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Card number</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="4242 4242 4242 4242" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Card expiration</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="MM / YY" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">CVC</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="999" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Street address</label>
            <input type="text" className="w-full border rounded px-3 py-2" placeholder="Street address" />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">ZIP/Postal code</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="12345" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">City</label>
              <input type="text" className="w-full border rounded px-3 py-2" placeholder="City" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">Country</label>
              <Select
                    value={selectedCountry}
                    onChange={(option) => setSelectedCountry(option)}
                    options={countryOptions}
                    placeholder="Country..."
                    isClearable
                  />
            </div>
          </div>

          <h3 className="text-lg font-medium mt-6">Invoice information</h3>
          <div className="flex justify-between mt-4">
            <button className="bg-blue-600 text-white rounded px-4 py-2">Same as payment information</button>
            <button className="border rounded px-4 py-2">Enter company information</button>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded w-full py-2 mt-6"
          >
            Save & continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
