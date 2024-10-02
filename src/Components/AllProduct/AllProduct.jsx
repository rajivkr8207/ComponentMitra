import React from "react";
import AllProducts from "../../assets/Data/AllProduct";
import Item from "../Item/Item";
const AllProduct = () => {
  return (
    <>
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color]  relative inline-block group">
          All Product
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {AllProducts.map((item, i) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                id={item.id}
                new_price={item.new_price}
                old_price={item.old_price}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllProduct;
