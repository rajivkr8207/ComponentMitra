import React from "react";
// import arrow_icon from '../Assets/breadcrum_arrow.png'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
const Breadcrum = (props) => {
  const { product } = props;
  return (
    <>
      <div className="breadcrum flex container mx-auto gap-2 my-5 lg:text-lg  text-sm">
        <Link to="/">HOME</Link>{" "}
        <MdKeyboardArrowRight className="my-auto text-lg" />{" "}
        <Link to={`/${product.category}/${product.id}`} className="capitalize ">
          {product.category}
        </Link>{" "}
        <MdKeyboardArrowRight className="my-auto " /> {product.name}
      </div>
    </>
  );
};

export default Breadcrum;
