import React, { useState } from "react";
import { CiCalendarDate } from "react-icons/ci";
import PaymentModal from "./PaymentModal";

const Billing = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [billingCycle, setBillingCycle] = useState("annual");
  const [isModalOpen, setModalOpen] = useState(false);

  // Updated FAQs array with questions and answers

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Function to toggle between billing cycles
  const toggleBillingCycle = (cycle) => {
    setBillingCycle(cycle);
  };

  // Pricing data for different billing cycles
  const pricingData = {
    annual: {
      starter: { original: "$69", discounted: "$56" },
      pro: { original: "$159", discounted: "$128" },
      team: { original: "$439", discounted: "$352" },
    },
    monthly: {
      starter: { original: "$79", discounted: "$69" },
      pro: { original: "$179", discounted: "$159" },
      team: { original: "$499", discounted: "$439" },
    },
  };

  const faqs = [
    {
      question: "What are Phantoms & Flows?",
      answer:
        "A Phantom is a single automated action that will help you meet a specific lead generation objective, while a Flow is a set of multiple automated actions for built-in lead generation sequences that will save you a lot of time. With 130+ Phantoms and Flows available, PhantomBuster makes it possible to extract data from top websites and automate online tasks at scale to generate leads like never before.",
    },
    {
      question: "How much execution time do I need?",
      answer:
        "The amount of execution time you need depends on the tasks you're automating and how frequently you want them to run. You can adjust your plan according to your usage requirements.",
    },
    {
      question: "How many slots do I need?",
      answer:
        "Slots determine how many Phantoms you can run simultaneously. The number of slots you need depends on your automation needs and how many tasks you want to perform at once.",
    },
    {
      question: "What are email credits?",
      answer:
        "Email credits are used when you use PhantomBuster's email scraping tools. Each email scraped from a website costs one credit.",
    },
    {
      question: "Are there integrations available?",
      answer:
        "Yes, PhantomBuster integrates with many third-party tools and platforms such as Zapier, HubSpot, Salesforce, and more.",
    },
    {
      question: "What if I decide to cancel?",
      answer:
        "You can cancel your subscription at any time from the account settings. Your account will remain active until the end of the current billing cycle.",
    },
    {
      question: "When will my card be charged?",
      answer:
        "Your card will be charged at the start of each billing cycle, which is typically monthly or annually, depending on your plan.",
    },
    {
      question: "Is it safe to use PhantomBuster?",
      answer:
        "Yes, PhantomBuster is designed to safely and securely automate web tasks. It complies with GDPR regulations and offers data privacy controls.",
    },
    {
      question: "What kind of data can PhantomBuster provide?",
      answer:
        "PhantomBuster can provide various types of data, including contact information, social media profiles, emails, and much more, depending on the source website.",
    },
    {
      question: "Do I need to have my browser open for it to work?",
      answer:
        "No, PhantomBuster runs in the cloud, so you don't need to have your browser open. You can set up automations, and they will run even if your computer is off.",
    },
  ];

  return (
    <>
      
       {/* Payment Modal */}
      <PaymentModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      

      {/* billing */}
      <div className="bg-[#f9f4f2] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              Plans tailored for all businesses, built to scale with your needs
            </h1>
            <p className="text-gray-600">
              With more than 100 Phantoms and Flows available, PhantomBuster
              gives you the unparalleled automation potential you need to
              accelerate your growth.
            </p>
          </div>

          {/* Scrollable Toggle Button */}
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center">
              <div className="flex border border-gray-200 rounded-full overflow-hidden shadow-md">
                <button
                  className={`py-2 px-4 transition-colors duration-300 ${
                    billingCycle === "annual"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => toggleBillingCycle("annual")}
                >
                  Annual billing
                </button>
                <button
                  className={`py-2 px-4 transition-colors duration-300 ${
                    billingCycle === "monthly"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700"
                  }`}
                  onClick={() => toggleBillingCycle("monthly")}
                >
                  Monthly billing
                </button>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Trial Plan */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Trial</h3>
              <p className="mb-4 text-sm">
                Get instant access for 14 days, no credit card required.
              </p>
              <p className="text-blue-500 mb-2">Current plan</p>
              <span className="block mb-4 text-xs text-gray-500">
                13 days left
              </span>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">2h execution time</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">1k AI credits</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">5 slots for Phantoms</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Limited export</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500">Bonus: 50 email credits</p>
            </div>

            {/* Starter Plan */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center relative">
              <h3 className="text-xl font-bold mb-4">Starter</h3>
              <p className="mb-4 text-sm">
                Enter the world of automation and growth.
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4 line-through">
                {pricingData[billingCycle].starter.original}
              </p>
              <p className="text-3xl font-bold mb-4">
                {" "}
                {pricingData[billingCycle].starter.discounted}
              </p>
              <p className="text-xs text-gray-500 mb-4">
                {billingCycle === "annual"
                  ? "per month, paid annually"
                  : "per month"}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">
                Purchase now
              </button>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">20h/month execution time</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">10k/month AI credits</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">5 slots for Phantoms</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Unlimited export</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Community access</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Priority support</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                Bonus: 500 email credits/month
              </p>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white text-xs px-2 py-1 rounded-bl-lg">
                Most popular
              </div>
              <h3 className="text-xl font-bold mb-4">Pro</h3>
              <p className="mb-4 text-sm">
                Accelerate your capacity to grow your business faster.
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4 line-through">
                {pricingData[billingCycle].pro.original}
              </p>
              <p className="text-3xl font-bold mb-4">
                {" "}
                {pricingData[billingCycle].pro.discounted}
              </p>
              <p className="text-xs text-gray-500 mb-4">
                {billingCycle === "annual"
                  ? "per month, paid annually"
                  : "per month"}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">
                Purchase now
              </button>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">80h/month execution time</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">30k/month AI credits</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">15 slots for Phantoms</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Unlimited export</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Community access</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Priority support</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                Bonus: 2,500 email credits/month
              </p>
            </div>

            {/* Team Plan */}
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">Team</h3>
              <p className="mb-4 text-sm">
                Scale your growth strategy within your team.
              </p>
              <p className="text-2xl font-bold text-blue-600 mb-4 line-through">
                {pricingData[billingCycle].team.original}
              </p>
              <p className="text-3xl font-bold mb-4">
                {pricingData[billingCycle].team.discounted}
              </p>
              <p className="text-xs text-gray-500 mb-4">
                {billingCycle === "annual"
                  ? "per month, paid annually"
                  : "per month"}
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded-full mb-4">
                Purchase now
              </button>
              <ul className="text-left mb-4">
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">300h/month execution time</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">90k/month AI credits</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">50 slots for Phantoms</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Unlimited export</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Community access</span>
                </li>
                <li className="flex items-center mb-2">
                  <span className="text-green-500">&#10003;</span>
                  <span className="ml-2">Priority support</span>
                </li>
              </ul>
              <p className="text-xs text-gray-500">
                Bonus: 10,000 email credits/month
              </p>
            </div>
          </div>
        </div>

        {/* payment card */}
        <div className="bg-[#f9f4f2] py-10">
          <div className="max-w-7xl mx-auto px-4 space-y-4">
            {/* Current Subscription Card */}
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col space-y-2">
              <div className="flex items-center space-x-2 mb-2">
                <CiCalendarDate className="text-4xl" />
                <h2 className="text-lg font-semibold">Current subscription</h2>
              </div>
              <p className="text-gray-500">Trial $0/month</p>
              <p className="text-sm text-gray-600">
                2h/month • 5 slots • 50 email credits/month
              </p>
            </div>

            {/* Payment Information & Schedule */}
            <div className="flex justify-between items-center space-x-4">
              {/* Payment Info Card */}
              <div className="bg-white rounded-lg shadow-md flex-1 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-lg">credit_card</span>
                  <h2 className="text-lg font-semibold">Payment info</h2>
                </div>
                <a onClick={() => setModalOpen(true)} className="text-blue-600 hover:cursor-pointer text-sm">
                  Add payment information &rarr;
                </a>
              </div>

              {/* Payment Schedule Card */}
              <div className="bg-white rounded-lg shadow-md flex-1 p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="material-icons text-lg">description</span>
                  <h2 className="text-lg font-semibold">Payment schedule</h2>
                </div>
                <a
                  href="#"
                  className="text-gray-300 cursor-not-allowed text-sm"
                >
                  See invoices &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* frequently asked questions */}
        <div className="max-w-7xl mt-10 mx-auto p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 relative"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between w-full text-left text-lg font-medium text-gray-900"
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    &#9662;
                  </span>
                </button>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? "max-h-40 mt-2" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Billing;
