import React from "react";
import Item from "../Item/Item";
import Mywishlist_Data from "../../assets/Data/Mywishlist";
const Mywishlist = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <h2 className="text-4xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
          My Wishlist
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {Mywishlist_Data.map((item) => (
            <Item
              name={item.name}
              id={item.id}
              new_price={item.new_price}
              old_price={item.old_price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Mywishlist;
