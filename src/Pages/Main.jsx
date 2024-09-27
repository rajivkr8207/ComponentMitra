import React from "react";
import Carousel from "../Components/Carousel/Carousel";
import Category from "../Components/Category/Category";
import Our_Project from "../Components/Our_Project/Our_project";
import Item from "../Components/Item/Item";
import AllProduct from "../Components/AllProduct/AllProduct";

const Main = () => {
  return (
    <>
      <Carousel />
      <Category />
      <Our_Project />
      <AllProduct />
    </>
  );
};

export default Main;
