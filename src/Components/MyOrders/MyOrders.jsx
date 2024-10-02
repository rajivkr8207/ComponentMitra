import React from "react";
import Myorders from "../../assets/Data/Myorder";

const MyOrders = () => {
  return (
    <>
      <div className="lg:p-8 min-h-screen ">
        <h2 className="text-4xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
          MyOrder
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
        </h2>
        <div className="space-y-6">
          {Myorders.map((order) => (
            <div
              key={order.id}
              className=" w-full p-2 shadow-md rounded-lg flex flex-row items-center justify-between gap-6"
            >
              {/* Order Image */}
              <div className="lg:w-[10%] w-[20%]">
                <img
                  src={order.image}
                  alt={order.productName}
                  className="w-full h-28 object-cover rounded-md"
                />
              </div>

              {/* Order Details */}
              <div className="flex-1 lg:w-[50%] w-[62%] flex flex-col justify-between">
                <div className="text-left">
                  <h2 className="lg:text-lg text-sm font-semibold">
                    {order.productName}
                  </h2>
                  <p className="lg:text-lg text-base font-semibold text-gray-800">
                    {order.amount}
                  </p>
                  <p className="text-gray-600 lg:text-lg text-sm">
                    Order Date:{" "}
                    <span className="text-gray-500">{order.orderDate}</span>
                  </p>
                  <div className="flex lg:hidden items-center gap-2 ">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-gray-500">{order.status}</p>
                  </div>
                </div>
              </div>

              {/* Order Status and Track Button */}
              <div className="lg:w-[40%] w-[18%] flex flex-row items-center justify-between lg:gap-6">
                {/* Order Status */}
                <div className="lg:flex hidden items-center gap-2 ">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <p className="text-gray-500 lg:text-lg text-sm">
                    {order.status}
                  </p>
                </div>

                {/* Track Order Button */}
                <button className="px-4 text-sm lg:py-2 py-3 border border-gray-300 bg-[--primary-color] text-white shadow-lg rounded-md hover:bg-[--secondary-color] hover:scale-105 transition-transform duration-150">
                  Track
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrders;
