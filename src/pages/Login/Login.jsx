import React from "react";
import img from "../../assets/images/leads_tab1.png";

const Login = () => {
  return (
    <div className="bg-secondary">
    <div className="container flex items-center justify-center min-h-screen">
      {/* Container */}
      <div className="grid max-w-4xl grid-cols-1 gap-8 p-8 mx-auto bg-white shadow-2xl rounded-xl md:grid-cols-2">
        {/* Left side with Illustration */}
        <div className="hidden md:block">
          <img src={img} alt="Illustration" className="mx-auto" />
        </div>

        {/* Right side with the Login form */}
        <div className="flex flex-col justify-center">
          <h2 className="mb-8 text-3xl font-bold text-center text-gray-800">
            Log in to your account
          </h2>

          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white transition duration-300 bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Log in
            </button>

            <p className="mt-4 text-sm text-center text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
            <p className="text-sm text-center text-gray-500">
              Forgot your password?{" "}
              <a href="#" className="font-medium text-blue-500 hover:underline">
                Reset it
              </a>
            </p>
          </form>
        </div>
      </div>
      </div>
      </div>
  );
};

export default Login;
