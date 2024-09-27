import React, { createContext, useState, useEffect } from "react";
import allProduct from "../assets/Data/AllProduct";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ShopContext = createContext(null);

// Initialize the cart with data from localStorage if available
const getInitialCart = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart"));
  if (storedCart) {
    let cart = {};
    for (let index = 0; index < allProduct.length; index++) {
      cart[index] = storedCart[index] || 0;
    }
    return cart;
  }
  let cart = {};
  for (let index = 0; index < allProduct.length; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartitems, setCartitems] = useState(getInitialCart());
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState("All");
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [sortOrder, setSortOrder] = useState("");
  const [searchQuery, setSearchQuery] = useState(""); // New search query state

  const allProducts = allProduct;

  // Filter logic based on selected filters and search query
  const filteredProducts = allProducts
    .filter((product) => {
      return (
        (selectedCategory === "All" || product.category === selectedCategory) &&
        (selectedSubcategory === "All" ||
          product.subcategory === selectedSubcategory) &&
        (selectedBrand === "All" || product.brand === selectedBrand) &&
        (product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    })
    // Apply the sort here after filtering
    .sort((a, b) => {
      if (sortOrder === "lowToHigh") {
        return a.new_price - b.new_price;
      } else if (sortOrder === "highToLow") {
        return b.new_price - a.new_price;
      }
      return 0;
    });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartitems));
  }, [cartitems]);

  const addToCart = (itemID) => {
    setCartitems((prev) => {
      if (prev[itemID] >= 5) {
        toast.warn("Cannot add more than 5 items!", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return prev;
      } else {
        return { ...prev, [itemID]: prev[itemID] + 1 };
      }
    });
  };

  const removeFromCart = (itemID) => {
    setCartitems((prev) => {
      const updatedCart = { ...prev };
      if (updatedCart[itemID] > 1) {
        updatedCart[itemID] -= 1;
      } else {
        updatedCart[itemID] = 0;
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let TotalAmount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = allProduct.find(
          (product) => product.id === Number(item)
        );
        if (iteminfo) {
          TotalAmount += Math.round(iteminfo.new_price * cartitems[item]);
        }
      }
    }
    return TotalAmount;
  };

  const getTotalcartItem = () => {
    let totalitem = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        totalitem += cartitems[item];
      }
    }
    return totalitem;
  };

  const removeAllFromCart = (id) => {
    setCartitems((prevCartItems) => {
      const updatedCart = { ...prevCartItems };
      updatedCart[id] = 0;
      return updatedCart;
    });
    toast.success("Removed all items successfully!", {
      position: "bottom-left",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const Contextvalue = {
    allProduct,
    cartitems,
    setCartitems,
    addToCart,
    removeFromCart,
    getTotalcartItem,
    getTotalCartAmount,
    removeAllFromCart,
    filteredProducts, // Filtered and sorted products
    selectedCategory,
    setSelectedCategory,
    setSelectedSubcategory,
    selectedSubcategory,
    setSelectedBrand,
    selectedBrand,
    sortOrder,
    handleSort: setSortOrder, // Update sort order
    searchQuery,
    setSearchQuery, // Update search query
  };

  return (
    <ShopContext.Provider value={Contextvalue}>
      {props.children}
      <ToastContainer />
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
