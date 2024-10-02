import React, { useContext, useRef, useState } from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaBoxOpen } from "react-icons/fa6";
import { ShopContext } from "../../Context/ShopContext";
const MobHeader = (props) => {
  const {
    getTotalcartItem,
    searchQuery,
    setSearchQuery,
    setSelectedCategory,
    setSelectedSubcategory,
    searchSuggestions,
  } = useContext(ShopContext);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [toggle, setToggle] = useState(false);
  const suggestionBoxRef = useRef(null); // Ref for suggestion box
  const navigate = useNavigate();
  const navlinking = [
    {
      name: "Home",
      icon: FaHome,
      link: "/",
    },
    {
      name: "Profile",
      icon: IoPersonSharp,
      link: "/profile",
    },
    {
      name: "Cart",
      icon: BsCart4,
      link: "/cart",
      badge: getTotalcartItem(), // Example for cart item count
    },
    {
      name: "My Order",
      icon: FaBoxOpen,
      link: "/myorder",
    },
  ];

  // const navigate = useNavigate();
  // const handleclick = () => {
  //   setSelectedCategory("All");
  //   setSelectedSubcategory("All");
  //   if (searchQuery.trim()) {
  //     navigate("/allproduct");
  //     props.toggle(false);
  //   }
  // };

  const handleclick = () => {
    setSelectedCategory("All");
    setSelectedSubcategory("All");
    props.toggle(false);
    if (searchQuery.trim()) {
      navigate("/allproduct");
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false); // Hide suggestions after clicking
    handleclick(); // Trigger search after selecting suggestion
    props.toggle(false);
  };
  const handleBlur = (e) => {
    if (
      suggestionBoxRef.current &&
      !suggestionBoxRef.current.contains(e.relatedTarget)
    ) {
      setTimeout(() => setShowSuggestions(false), 200);
    }
  };

  return (
    <div className="lg:hidden block z-20 absolute w-full h-auto py-4 px-4 bg-white shadow-md">
      <ul className="flex flex-col gap-4">
        <li>
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={() => setShowSuggestions(true)}
              onBlur={handleBlur}
              className="w-full bg-transparent border-none outline-none px-4 py-2 text-gray-700 text-lg placeholder-gray-500"
            />
            <button
              onClick={handleclick}
              className="bg-[--primary-color] hover:bg-[--secondary-color] text-white px-4 py-4 transition-all duration-200 ease-in-out"
            >
              <FaSearch />
            </button>
          </div>
          {showSuggestions && searchSuggestions.length > 0 && (
            <ul
              ref={suggestionBoxRef}
              className="absolute z-10 w-full max-w-md mt-1 top-12 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden"
            >
              {searchSuggestions.map((suggestion, index) => (
                <li
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion.name)}
                  className="px-4 py-2 cursor-pointer bg-white"
                >
                  <span className="font-semibold">{suggestion.name}</span>
                </li>
              ))}
            </ul>
          )}
        </li>

        {navlinking.map((item, i) => {
          const IconComponent = item.icon;
          return (
            <li
              key={i}
              className="flex justify-between items-center mx-auto"
              onClick={() => {
                props.toggle(false);
              }}
            >
              <Link to={item.link}>
                <button className="flex items-center gap-2 text-3xl group text-gray-700 hover:text-[--primary-color] transition duration-200 ease-in-out relative">
                  <IconComponent />
                  {item.name == "Cart" && (
                    <div className="absolute top-[-0.5rem] left-[1rem] bg-red-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                      {item.badge}
                    </div>
                  )}
                  <span className="text-lg font-semibold">{item.name}</span>
                </button>
              </Link>
            </li>
          );
        })}

        <li
          className="flex justify-between items-center mx-auto"
          onClick={() => {
            props.toggle(false);
          }}
        >
          <Link to="/login">
            <button className="bg-[--primary-color] px-3 py-2 text-white font-semibold hover:bg-[--secondary-color] transition duration-200 ease-in-out">
              Login/SignUp
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobHeader;
