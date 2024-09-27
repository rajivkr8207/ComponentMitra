import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
const LoginSignUP = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-[--primary-color] mb-8">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          {/* Form */}
          <form className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[--primary-color]"
                  placeholder="Enter your full name"
                />
              </div>
            )}

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[--primary-color]"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-[--primary-color]"
                placeholder="Enter your password"
              />
            </div>

            <button className="w-full py-2 bg-[--primary-color] hover:bg-[--secondary-color] text-white rounded-lg font-bold transition duration-200">
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <span className="border-b border-[--primary-color] w-full "></span>
            <span className="px-4 text-gray-600">OR</span>
            <span className="border-b border-[--primary-color] w-full "></span>
          </div>

          {/* Google Authentication */}
          <button className="w-full py-2 bg-[--secondary-color] hover:bg-[--primary-color] text-white rounded-lg flex items-center justify-center gap-2 font-bold transition duration-200">
            <FaGoogle className="text-xl" />
            {isLogin ? "Login" : "Sign Up"} with Google
          </button>

          {/* Toggle Auth Mode */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={toggleAuthMode}
                className="text-[--primary-color] hover:underline font-bold transition duration-200"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignUP;
