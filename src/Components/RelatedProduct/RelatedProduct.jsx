import React, { useContext, useEffect, useRef } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Item from "../Item/Item";
import Slider from "react-slick";
// import categorydata from "../../assets/Data/CategoryData";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const RelatedProduct = (props) => {
  const { allProduct } = useContext(ShopContext); // Destructure allProduct from context
  const { product } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [allProduct]);

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
    <>
      <div className="container mx-auto my-8">
        <h2 className="text-4xl font-bold text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
          Related Project
          <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
        </h2>

        {/* <div >
    <div className="relative">
    <button className="button absolute left-0 top-[45%] z-10 bg-[--primary-color] hover:bg-[--secondary-color] p-2 rounded-full text-white" onClick={previous}>
        <FaArrowLeft/>
      </button>
    <Slider ref={slider => {
        sliderRef = slider;
      }} {...settings} className="py-8 ">
      {allProduct.map((item, i) => {
                    if (product.category === item.category) {
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
      </Slider>
      <button className="button absolute right-0 top-[45%] z-10 bg-[--primary-color] hover:bg-[--secondary-color] p-2 rounded-full text-white" onClick={next}>
        <FaArrowRight/>
      </button>
    </div>
    </div> */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
          {allProduct.map((item, i) => {
            if (product.category === item.category) {
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

export default RelatedProduct;
