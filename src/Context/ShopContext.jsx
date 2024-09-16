import React, { createContext, useState, useEffect } from 'react';
import allProduct from '../assets/Data/AllProduct';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ShopContext = createContext(null);

// Initialize the cart with data from localStorage if available
const getInitialCart = () => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
        // Ensure all products are present in the cart object
        let cart = {};
        for (let index = 0; index < allProduct.length; index++) {
            cart[index] = storedCart[index] || 0; // Use stored value or initialize to 0
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

    // Update localStorage whenever cartitems change
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartitems));
    }, [cartitems]);

    const addToCart = (itemID) => {
        setCartitems((prev) => {
            if (prev[itemID] >= 5) {
                // Show a warning toast if the item quantity is already 5 or more
                toast.warn('Cannot add more than 5 item!', {
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
                // Add the item to the cart
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
                updatedCart[itemID] = 0; // Set to 0 instead of deleting
            }
            return updatedCart;
        });

    };

    const getTotalCartAmount = () => {
        let TotalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = allProduct.find((product) => product.id === Number(item));
                if (iteminfo) {
                    TotalAmount += iteminfo.new_price * cartitems[item];
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
            updatedCart[id] = 0; // Set to 0 instead of deleting
            return updatedCart;
        });
        toast.success('Removed all items successfully!', {
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

    const Contextvalue = { allProduct, cartitems, setCartitems, addToCart, removeFromCart, getTotalcartItem, getTotalCartAmount, removeAllFromCart };

    return (
        <ShopContext.Provider value={Contextvalue}>
            {props.children}
            <ToastContainer />
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
