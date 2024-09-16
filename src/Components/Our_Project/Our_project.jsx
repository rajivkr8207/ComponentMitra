import React, { useRef } from "react";
import projectdata from '../../assets/Data/ProjectData';
import Slider from "react-slick";
// import categorydata from "../../assets/Data/CategoryData";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const OurProject = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto my-8">
    
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-4xl font-bold text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
          Our Project
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
        </h2>
      </div>
      <div >
      <div className="relative">
      <button className="button absolute left-0 top-[45%] z-10 bg-[--primary-color] hover:bg-[--secondary-color] p-2 rounded-full text-white" onClick={previous}>
          <FaArrowLeft/>
        </button>
      <Slider ref={slider => {
          sliderRef = slider;
        }} {...settings} className="py-8 ">
        {projectdata.map((item) => (
          <div key={item.id} className="mx-auto py-5 h-[18rem]">
          <div  className="w-56 h-56 mx-auto bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <img src={item.image} alt={item.name} className="w-[10rem] h-[10rem] mb-2" />
              <p className="text-center font-semibold text-lg">{item.name}</p>
            </div>
          </div>
          </div>
        ))}
        </Slider>
        <button className="button absolute right-0 top-[45%] z-10 bg-[--primary-color] hover:bg-[--secondary-color] p-2 rounded-full text-white" onClick={next}>
          <FaArrowRight/>
        </button>
      </div>
      </div>
    </div>
  );
};

export default OurProject;
