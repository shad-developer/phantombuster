import React, { useState } from "react";
import logo from "../../assets/images/Logo.png";

const testimonials = [
  {
    quote:
      "PhantomBuster releases and maintains tons of automations, saving us hours a week on web-scraping related tasks. They have an incredible team and we recommend their tools to our clients, top startups in the US and French markets.",
    author: "Grégoire Gambatto",
    title: "Founder @ Germinal",
    avatar:
      "https://images.ctfassets.net/dxtropueh0dz/1Pn9yyeCDt8P6Fjvy1qWuR/38514b1bd1ab49b625ad218393245dc5/gregoire_gambatto.jpeg?w=50&h=50",
  },
  {
    quote:
      "PhantomBuster helped us scale our lead generation process and automatically start discussions with our prospects over Twitter, Instagram and LinkedIn.",
    author: "Robin Herzog",
    title: "Growth @ Swapcard",
    avatar:
      "https://images.ctfassets.net/dxtropueh0dz/62x0jenJNrufrOR6uk8glN/9e6162fe74da1ef218e8828abb7d7ec0/robin_herzog.jpeg?w=50&h=50",
  },
  {
    quote:
      "PhantomBuster is my #1 tool for fresh data and surgically precise automations, without a single line of code.",
    author: "Maxime Ferret",
    title: "Growth Manager @ Upflow",
    avatar:
      "https://images.ctfassets.net/dxtropueh0dz/3oK9PEn3qP8VQAei16BysL/8d9d7f179fc44532a9c2a6ac02cccca9/maxime_ferret.jpeg?w=50&h=50",
  },
  // Add more testimonials as needed
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className="bg-color py-10">
        <div className="container relative p-8 rounded-lg max-w-2xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">
            Trusted by <span className="text-primary"> 100,000+</span>{" "}
            businesses
          </h2>
          <p className="text-center text-xl mb-6">
            Startups & large companies alike choose PhantomBuster
          </p>

          {/* Testimonial Card */}
          <div className="relative p-6 bg-white shadow-md rounded-md min-h-64 flex flex-col justify-between">
            <p className="text-lg italic font-semibold mb-4 flex-grow">
              "{testimonials[currentIndex].quote}"
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].author}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-bold">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            &#8592;
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            &#8594;
          </button>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 mx-1 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
        {/* dorm */}
        <div className="container mt-24 flex justify-center">
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
    </>
  );
};

export default Testimonial;
