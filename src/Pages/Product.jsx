import React, { useContext, useEffect } from "react";
import ShopCategory from "./ShopCategory";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Breadcrum from "../Components/Breadcrum/Breadcrum";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct";

const Product = () => {
  const { allProduct } = useContext(ShopContext); // Fixed the typo here
  const { productId } = useParams();

  const product = allProduct.find((e) => e.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <RelatedProduct product={product} />
    </>
  );
};

export default Product;
