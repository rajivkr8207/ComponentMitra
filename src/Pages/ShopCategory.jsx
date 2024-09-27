import React, { useContext, useEffect, useState } from "react";
import Item from "../Components/Item/Item";
import { ShopContext } from "../Context/ShopContext";
import SubCategory from "../Components/SubCategory/SubCategory";
import categorydata from "../assets/Data/CategoryData";
import FilterCategory from "../Components/FilterCategory/FilterCategory";

const ShopCategory = (props) => {
  const [filter, setFilter] = useState(false);

  const {
    filteredProducts,
    allProduct,
    setSelectedSubcategory,
    setSelectedCategory,
    selectedCategory,
    selectedSubcategory,
    setSelectedBrand,
    selectedBrand,
  } = useContext(ShopContext); // Destructure allProduct from context
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [allProduct]);
  // const allProducts = allProduct;

  return (
    <>
      <div className="w-full flex gap-2 my-2 lg:hidden  top-0 left-0 z-20 bg-white border-b border-gray-200 py-2 shadow-sm">
        <button
          onClick={() => setFilter(true)}
          className="w-1/2 px-4 py-3 bg-[--primary-color] border border-gray-300 text-lg text-white font-semibold rounded-md hover:bg-[--secondary-color] focus:outline-none  transition-bg"
        >
          Filter
        </button>
        <button
          onClick={() => setFilter(true)}
          className="w-1/2 px-4 py-3 bg-[--primary-color] border border-gray-300 text-lg text-white font-semibold rounded-md hover:bg-[--secondary-color] focus:outline-none  transition-bg"
        >
          Sort
        </button>
      </div>

      <div className="flex">
        <FilterCategory filter={filter} setFilter={setFilter} />

        <div className="lg:w-[85%] w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5 my-1 lg:h-[75vh] h-auto scrollbar-thin lg:overflow-y-auto">
          {filteredProducts.map((item, i) => {
            if (item) {
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ShopCategory;
