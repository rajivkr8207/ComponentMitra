import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import categorydata from "../../assets/Data/CategoryData";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Category = () => {
  const { setSelectedCategory, setSearchQuery } = useContext(ShopContext);
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const handleGoTosubcategory = (item) => {
    // e.preventDefault();
    window.scrollTo(0, 0);
    setSelectedCategory(item.name);
  };
  return (
    <div className="container mx-auto my-8  py-5">
      <h2 className="text-4xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color]  relative inline-block group">
        Category
        <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
      </h2>
      <div className="relative">
        <button
          className="button absolute left-0 top-[45%] z-10 bg-[--primary-color] hover:bg-[--secondary-color] p-2 rounded-full text-white"
          onClick={previous}
        >
          <FaArrowLeft />
        </button>
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
          className="py-8 "
        >
          {categorydata.map((item, i) => (
            <Link
              to={`${item.name}/${item.id}`}
              key={i}
              onClick={() => {
                handleGoTosubcategory(item);
                setSearchQuery("");
              }}
            >
              <div className="px-2 py-3 h-[15rem]">
                <div className="w-[10rem] h-[13rem] py-5 grid place-content-center  bg-gradient-to-b from-[#ffeb91] to-[rgba(255,255,255,1)]  border-4 border-[#ffde4c] rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105">
                  <div className="mx-auto flex flex-col items-center gap-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[7rem] h-[7rem]"
                    />
                    <p className="text-center font-semibold text-sm mt-2 capitalize">
                      {item.name}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
        <button
          className="button absolute right-0 top-[45%] z-10 bg-[--primary-color] hover:bg-[--secondary-color] p-2 rounded-full text-white"
          onClick={next}
        >
          <FaArrowRight />
        </button>
      </div>
      {/* <div className="text-center mx-auto">
        <button className="button" onClick={previous}>
          Previous
        </button>
        <button className="button" onClick={next}>
          Next
        </button>
      </div> */}
    </div>
  );
};

export default Category;
