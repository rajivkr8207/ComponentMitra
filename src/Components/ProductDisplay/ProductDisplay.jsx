import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Slider from "react-slick";
import { ShopContext } from "../../Context/ShopContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
const ProductDisplay = (props) => {
  const [currentImage, setCurrentImage] = useState(
    "http://localhost:5173/src/Components/Assets/product_14.png"
  );
  const { product } = props;
  const navigate = useNavigate();
  const { addToCart, cartitems } = useContext(ShopContext);
  const thumbnails = [
    "http://localhost:5173/src/Components/Assets/product_35.png",
    "http://localhost:5173/src/Components/Assets/product_14.png",
    "http://localhost:5173/src/Components/Assets/product_19.png",
    "http://localhost:5173/src/Components/Assets/product_20.png",
  ];

  // Check if the product is already in the cart
  const isInCart = cartitems[product.id] > 0;
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  const handleGoToCart = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Left Side - Product Image and Image Selection */}
      <div className="w-full md:w-1/2 my-3">
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <img
                src={product.image}
                alt="Product"
                className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto h-[25rem]"
              />
            </div>
            <div>
              <img
                src={product.image}
                alt="Product"
                className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto h-[25rem]"
              />
            </div>
            <div>
              <img
                src={product.image}
                alt="Pr oduct"
                className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto h-[25rem]"
              />
            </div>
            <div>
              <img
                src={product.image}
                alt="Product"
                className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto h-[25rem]"
              />
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="w-full md:w-1/2">
                <div className="relative shadow-lg rounded-md overflow-hidden">
                    <img src={currentImage} alt="Product" className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto h-[25rem]" />
                </div>
                
                <div className="flex space-x-2 mt-4">
                    {thumbnails.map((thumb, index) => (
                        <img 
                            key={index} 
                            src={thumb} 
                            alt={`Thumbnail ${index + 1}`} 
                            className="w-16 h-16 cursor-pointer border border-gray-200 rounded-md"
                            onClick={() => setCurrentImage(thumb)} 
                        />
                    ))}
                </div>
            </div> */}

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-8">
        {/* {product.name} */}
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

        {/* Product Rating */}
        <div className="flex items-center mb-2">
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiFillStar className="text-yellow-500" />
          <AiOutlineStar className="text-yellow-500" />
          <span className="ml-2 text-sm text-gray-500">(120 Reviews)</span>
        </div>

        {/* Product Price */}
        <div className="flex items-center space-x-4 mb-2">
          <span className="text-xl font-semibold text-[--secondary-color]">
            ₹{product.new_price}
          </span>
          <span className="text-lg text-gray-500 line-through">
            ₹{product.old_price}
          </span>
        </div>

        {/* Product Short Description */}
        <div className="text-base font-normal my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum omnis
          iusto quibusdam quas, animi rem?
        </div>
        <hr className="border border-gray-500 my-3" />

        {/* Add to Cart and Wishlist Button */}
        <div className="flex justify-start items-center gap-5 mb-4">
          {isInCart ? (
            <Link
              to="/cart"
              onClick={handleGoToCart}
              className="bg-[--primary-color] text-white py-3 px-6 rounded-md hover:bg-[--secondary-color]"
            >
              Go to Cart
            </Link>
          ) : (
            <button
              onClick={() => {
                addToCart(product.id);
              }}
              className="bg-[--primary-color] text-white py-3 px-6 rounded-md hover:bg-[--secondary-color]"
            >
              Add to Cart
            </button>
          )}
          <button className="border border-gray-300 py-3 px-4 group rounded-md hover:bg-gray-100">
            <FaHeart
              size={20}
              className="text-gray-400 group-hover:text-red-500"
            />
          </button>
        </div>

        {/* Free Delivery and Return Policy */}
        <div className="border border-gray-200 rounded-md mb-4">
          <div className="flex px-3 py-4 items-center gap-3">
            <TbTruckDelivery className="text-3xl text-black" />
            <div>
              <h3 className="text-md font-medium">Free Delivery</h3>
              <p className="text-sm">Your location delivery availability</p>
            </div>
          </div>
          <div className="flex px-3 py-4 items-center gap-3 border-t border-gray-200">
            <BsArrowRepeat className="text-3xl text-black" />
            <div>
              <h3 className="text-md font-medium">Return Delivery</h3>
              <p className="text-sm">
                7 Day Return Policy{" "}
                <span className="cursor-pointer text-blue-600 underline">
                  Details
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Product Description */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Product Description</h2>
          <p className="text-gray-700">
            This is a detailed description of the product. It explains the
            features, benefits, and other important information about the
            product.
          </p>
        </div>

        {/* Customer Reviews */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
          <p className="text-sm text-gray-700">
            John Doe: "Great product! Highly recommend it."
          </p>
          <p className="text-sm text-gray-700">
            Jane Smith: "Good quality for the price."
          </p>
          <p className="text-sm text-blue-600 cursor-pointer">
            Read more reviews
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
