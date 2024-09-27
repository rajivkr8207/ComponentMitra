import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import categorydata from "../../assets/Data/CategoryData";
const SubCategory = () => {
  const { allProduct } = useContext(ShopContext);
  const allProducts = allProduct;
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [minPrice, setMinPrice] = useState(0);

  // Filter logic based on selected filters
  const filteredProducts = allProducts.filter((product) => {
    return (
      (selectedCategory === "All" || product.category === selectedCategory) &&
      (selectedSubcategory === "All" ||
        product.subcategory === selectedSubcategory) &&
      (selectedBrand === "All" || product.brand === selectedBrand)
    );
  });

  return (
    <div>
      {/* Category Filter */}
      <select
        onChange={(e) => setSelectedCategory(e.target.value)}
        value={selectedCategory}
      >
        <option value="All">All Categories</option>
        {categorydata.map((item) => {
          return <option value={item.name}>{item.name}</option>;
        })}
      </select>

      {/* Subcategory Filter */}
      <select
        onChange={(e) => setSelectedSubcategory(e.target.value)}
        value={selectedSubcategory}
      >
        <option value="All">All Subcategories</option>
        {categorydata.map((item) => {
          {
            item.subcategory &&
              item.subcategory.map((cate) => {
                return <option value={cate.title}>{cate.title}</option>;
              });
          }
        })}
        {/* Add more subcategories */}
      </select>

      {/* Brand Filter */}
      <select
        onChange={(e) => setSelectedBrand(e.target.value)}
        value={selectedBrand}
      >
        <option value="All">All Brands</option>
        <option value="Brand A">Brand A</option>
        <option value="Brand B">Brand B</option>
        {/* Add more brands */}
      </select>

      {/* Display Products */}
      {/* <div>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Brand: {product.brand}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SubCategory;
