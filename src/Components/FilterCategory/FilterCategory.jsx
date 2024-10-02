import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
// import SubCategory from "../Components/SubCategory/SubCategory";
import categorydata from "../../assets/Data/CategoryData";
import { IoMdClose } from "react-icons/io";
import ShopCategory from "../../Pages/ShopCategory";
const FilterCategory = ({ filter, setFilter }) => {
  const {
    filteredProducts,
    allProduct,
    setSelectedSubcategory,
    setSelectedCategory,
    selectedCategory,
    selectedSubcategory,
    setSelectedBrand,
    selectedBrand,
    setSearchQuery,
    sortOrder,
    handleSort,
  } = useContext(ShopContext);
  return (
    <>
      <div
        className={`lg:w-[15%] w-full lg:h-[73vh] lg:mt-2 mt-0 lg:block ${
          filter ? `fixed top-0 left-0 h-full z-20 ` : `hidden`
        }    bg-white shadow-lg overflow-hidden rounded-lg`}
      >
        <div
          className="lg:hidden absolute top-3 right-4 my"
          onClick={() => {
            setFilter(false);
          }}
        >
          <IoMdClose className="text-4xl text-black" />
        </div>
        <div className="p-4 space-y-4 lg:mt-0 mt-10">
          {/* Category Filter */}
          <h2 className="text-xl font-bold mb-2 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
            Filter
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
          </h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedSubcategory("All");
                setSearchQuery("");
              }}
              value={selectedCategory}
              className="w-full scrollbar-thin p-2 border border-gray-300 rounded-md focus:outline-none"
            >
              <option value="All">All Categories</option>
              {categorydata.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subcategory Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subcategory
            </label>
            <select
              onChange={(e) => {
                setSelectedSubcategory(e.target.value);
                setSearchQuery("");
              }}
              value={selectedSubcategory}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
            >
              <option value="All">All Subcategories</option>
              {categorydata
                .filter((item) => item.name === selectedCategory)
                .map((item) =>
                  item.subcategory?.map((cate) => (
                    <option key={cate.title} value={cate.title}>
                      {cate.title}
                    </option>
                  ))
                )}
            </select>
          </div>
          <h2 className="text-xl font-bold mb-2 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
            Shorted
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
          </h2>
          <div className="flex justify-end flex-col mb-4">
            <select
              value={sortOrder}
              onChange={(e) => handleSort(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Brand Filter */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand
            </label>
            <select
              onChange={(e) => setSelectedBrand(e.target.value)}
              value={selectedBrand}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Brands</option>
              Add your brand options here
            </select>
          </div> */}
        </div>
        {/* Enable scrollbar with hidden overflow */}
        {/* <div className="overflow-y-auto h-[300px] px-4">
      </div> */}
        <button
          onClick={() => {
            setFilter(false);
          }}
          className="lg:hidden absolute bottom-5 right-5 px-4 py-2 rounded-lg bg-[--primary-color] text-white font-semibold"
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default FilterCategory;
