import React, { useContext, useEffect } from "react";
import project from "../../assets/Project/project1.png";
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Item = (props) => {
  const { addToCart, cartitems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    console.log("add to cart successful");
    addToCart(props.id);
  };

  // Check if the product is already in the cart
  const isInCart = cartitems[props.id] > 0;

  const handleGoToCart = () => {
    // Navigate to cart page
    navigate("/cart");
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return (
    // bg-gradient-to-b from-[#FFEB92] to-[#ffffff]
    // border-[#ffde4c]
    <div
      key={props.i}
      className="lg:w-[15rem] lg:h-[20rem] h-[17rem]    md:w-[13rem] w-[9.5rem] mx-auto rounded-sm overflow-hidden hover:shadow-2xl m-4 transition-transform transform lg:hover:scale-105"
    >
      <Link to={`/product/${props.id}`}>
        <div className="relative w-full lg:h-44 h-32">
          <img
            className="w-full h-full object-cover"
            src={props.image}
            alt="Product"
          />
          <div className="absolute top-0 left-0 bg-gradient-to-b from-[#FFC300] to-[#fae292] bg-opacity-60 text-black lg:text-xs text-[0.7rem] px-2 py-1 rounded-br-lg font-semibold">
            New Arrival
          </div>
          {/* Heart Button */}
          <button className="absolute top-2 right-2 text-gray-700 hover:text-red-500 transition-colors">
            <FaHeart size={20} />
          </button>
        </div>
        <div className="px-4 py-4">
          <div className="font-bold text-lg mb-2 text-gray-900 truncate">
            {props.name}
          </div>
          <p className="text-gray-700 text-base flex gap-4 items-center">
            <span className="font-semibold text-[--secondary-color]">
              ₹{props.new_price}
            </span>
            <span className="line-through text-gray-500">
              ₹{props.old_price}
            </span>
          </p>
        </div>
      </Link>

      {/* Add to Cart and Wishlist Button */}
      <div className="px-4 pt-0 lg:pb-4 pb-2 flex justify-between">
        {isInCart ? (
          <button
            onClick={handleGoToCart}
            className="bg-[--primary-color] hover:bg-[--secondary-color] text-white text-sm font-bold py-2 lg:px-4 px-3 rounded-lg transition-colors duration-300"
          >
            Go to Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="bg-[--primary-color] hover:bg-[--secondary-color] text-white text-sm font-bold py-2 lg:px-4 px-3 rounded-lg transition-colors duration-300"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Item;
