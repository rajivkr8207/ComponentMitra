import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    speed: 1000, // Speed of the transition between slides
    autoplaySpeed: 3000, // Wait time before moving to the next slide (in milliseconds)
    cssEase: "ease-in-out",
    customPaging: (i) => (
      <div className="bg-[--secondary-color] hover:bg-[--yellowish-color] h-3 w-3 rounded-full mx-1" />
    ),
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </div>
    ),
    prevArrow: <button className="arrow arrow-left">←</button>,
    nextArrow: <button className="arrow arrow-right">→</button>,
  };

  return (
    <div className="relative container mx-auto my-5">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="relative">
            <img
              src={banner}
              alt="Banner 1"
              className="w-full object-cover h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
            />
            <div className="absolute bottom-0 left-0 w-full h-full p-6 bg-gradient-to-t from-black to-white/10 bg-opacity-50 text-white text-center">
              <div className="w-full absolute bottom-0 left-[50%] translate-x-[-50%] py-3">
                <h2 className="lg:text-3xl text-xl font-bold mb-4">
                  Explore Our New Collection
                </h2>
                <p className="mb-4">Discover the latest trends and styles.</p>
                <button className="bg-[--primary-color] hover:bg-[--secondary-color] text-white py-2 lg:px-6 px-3 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={banner2}
              alt="Banner 2"
              className="w-full object-cover h-[50vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
            />
            <div className="absolute bottom-0 left-0 w-full h-full p-6 bg-gradient-to-t from-black to-white/10 bg-opacity-50 text-white text-center">
              <div className="w-full absolute bottom-0 left-[50%] translate-x-[-50%] py-3">
                <h2 className="lg:text-3xl text-xl font-bold mb-4">
                  Seasonal Sale
                </h2>
                <p className="mb-4">Save up to 50% on selected items.</p>
                <button className="bg-[--primary-color] hover:bg-[--secondary-color] text-white py-2 lg:px-6 px-3 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
