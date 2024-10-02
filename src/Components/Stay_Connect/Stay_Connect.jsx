import React from "react";

const Stay_Connect = () => {
  return (
    <div className="w-[100vw] overflow-hidden flex justify-center items-center bg-black text-white py-10 my-5">
      <div className="text-center">
        <h1 className="text-4xl font-semibold mb-4">
          Get Exlusive Offers on your Emaill
        </h1>
        <div className="text-sm">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            quaerat nisi error!
          </p>
        </div>
        <div className="flex justify-center lg:flex-row flex-col gap-5 mt-4 mx-1 px-3">
          <input
            type="text"
            placeholder="Enter your email"
            className="lg:px-4 px-2 py-3 text-lg lg:rounded-l-md rounded-md  border-none outline-none text-gray-700"
          />
          <button className="lg:px-6 px-4 py-3 inline-block mx-auto lg:rounded-r-md rounded-lg bg-[--primary-color] hover:bg-[--secondary-color] transition text-white font-bold text-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stay_Connect;
