import React from "react";
import img from "../../assets/images/enrich_tab2.png";

const Signup = () => {
  return (
    <div className="bg-secondary">
      <div className="container min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 p-6 my-5 bg-white shadow-lg rounded-lg">
          <div className="flex flex-col items-center">
            <div className=" mb-4 hidden md:block">
              <img src={img} alt="" />
            </div>
            <p className="text-center text-gray-600">
              With this free trial, you'll have the ability to generate leads at
              scale from all major networks & websites.
            </p>
          </div>

          {/* Right side with the signup form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">
              Sign up to PhantomBuster
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              14-day free trial - no credit card required
            </p>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Password must be 8 characters or more, including uppercase,
                  lowercase, and a number.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Start your 14-day free trial
              </button>

              <p className="mt-4 text-center text-sm text-gray-500">
                Already have an account?{" "}
                <a href="#" className="text-blue-500">
                  Log in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
