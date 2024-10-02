import React, { useContext } from "react";
import categorydata from "../assets/Data/CategoryData";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const SubShopCategory = () => {
  const { setSelectedSubcategory, setSearchQuery } = useContext(ShopContext);
  const { categoryid } = useParams(); // Extract categoryid from URL parameters
  const category = categorydata.find((e) => e.id === Number(categoryid)); // Find the category by id

  console.log(category);

  if (!category) {
    return <div>Category not found</div>; // Handle case where category doesn't exist
  }

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* Sidebar for Category List */}
        <div
          className="w-[20%] lg:block hidden  max-h-[30rem] 
scrollbar-thin py-3 px-4 bg-white shadow-md rounded-md border border-gray-200 overflow-y-auto"
        >
          <h2 className="text-xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
            {category.name}
            <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
          </h2>
          <ul className="space-y-3">
            {category.subcategory && category.subcategory.length > 0 ? (
              category.subcategory.map((item, i) => (
                <li key={i}>
                  <Link
                    to={`/allproduct`}
                    className="block py-2 px-3  hover:bg-[--primary-color] hover:text-white font-semibold rounded-md transition-all duration-100"
                    onClick={() => {
                      setSelectedSubcategory(item.title);
                    }}
                  >
                    {item.title}
                  </Link>
                </li>
              ))
            ) : (
              <div className="text-gray-500">No subcategories available</div>
            )}
          </ul>
        </div>

        {/* Main Content for Category Description and Subcategory Items */}
        <div className="w-full lg:w-[80%] h-[77vh] p-4 scrollbar-thin overflow-y-auto">
          {/* Category Description */}
          <div className=" p-4 rounded-lg mb-6">{category.description}</div>

          {/* Subcategory Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2  gap-4">
            {category.subcategory && category.subcategory.length > 0 ? (
              category.subcategory.map((item, i) => (
                <Link
                  to={`/allproduct`}
                  key={i}
                  className="group"
                  onClick={() => {
                    setSelectedSubcategory(item.title);
                    setSearchQuery("");
                  }}
                >
                  <div className="px-2 py-3 lg:w-[9rem] w-[10rem] h-[15rem] mx-auto ">
                    <div className="w-full h-[12rem] py-5 mx-auto grid place-content-center bg-gradient-to-b from-[#FDF1C3] to-[rgba(255,255,255,1)] border-4 border-[#ffde4c] rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform group-hover:scale-105">
                      <div className="flex flex-col items-center gap-1">
                        <img
                          src={item.photo}
                          alt={item.title}
                          className="w-[7rem] h-[7rem] object-cover"
                        />
                        <p className="text-center font-semibold text-sm mt-2 capitalize">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-gray-500">No subcategories available</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubShopCategory;
