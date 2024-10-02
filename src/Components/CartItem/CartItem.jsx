import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartItem = () => {
  const {
    getTotalCartAmount,
    allProduct,
    cartitems,
    removeFromCart,
    addToCart,
    removeAllFromCart,
  } = useContext(ShopContext);

  // Check if the cart is empty
  const isCartEmpty = allProduct.every((item) => !cartitems[item.id]);

  return (
    <>
      <div className="lg:container mx-auto my-5">
        <div className="flex md:flex-row flex-col gap-6">
          <div className="md:w-[70vw] w-full p-6 rounded-lg self-start">
            <h2 className="text-4xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
              Cart
              <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
            </h2>

            {/* If the cart is empty, display a message */}
            {isCartEmpty ? (
              <div className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md text-center">
                  <AiOutlineShoppingCart className="text-center text-8xl mx-auto" />
                  <h2 className="text-2xl font-semibold mb-4">
                    Your Cart is Empty
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <Link
                    to="/"
                    className="px-6 py-2 bg-[--primary-color] text-white rounded-md hover:bg-[--secondary-color]"
                  >
                    Start Shopping
                  </Link>
                </div>
              </div>
            ) : (
              allProduct.map((item) => {
                if (cartitems[item.id]) {
                  const itemQuantity = cartitems[item.id];
                  const itemTotalPrice = Math.round(
                    item.new_price * itemQuantity
                  );
                  return (
                    <div
                      key={item.id}
                      className="flex  flex-row max-w-3xl mx-auto pr-3  rounded-lg mb-4 bg-[#ffffff] shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-105"
                    >
                      <div className="w-full lg:w-1/2 lg:px-4 flex justify-center items-center">
                        <Link to={`/product/${item.id}`}>
                          <img
                            src={item.image}
                            alt="Product"
                            className="max-w-full max-h-full object-cover rounded-lg"
                          />
                        </Link>
                      </div>
                      <div className="w-full lg:w-1/2 py-2 flex justify-between">
                        <div className="mb-4 lg:mb-0">
                          <Link to={`/product/${item.id}`}>
                            <h2 className="lg:text-xl text-md font-bold">
                              {item.name}
                            </h2>
                            <div className="flex items-center mt-2">
                              <span className="text-lg font-bold text-[--primary-color]">
                                ₹{item.new_price}
                              </span>
                              <span className="ml-2 text-sm text-gray-500 line-through">
                                ₹{item.old_price}
                              </span>
                            </div>
                          </Link>
                          <div className="flex items-center mt-4">
                            <button
                              className="px-2 py-1 bg-[--primary-color] text-white rounded hover:bg-[--secondary-color] mr-2"
                              onClick={() => {
                                removeFromCart(item.id);
                              }}
                            >
                              -
                            </button>
                            <span className="text-lg font-bold mx-2">
                              {itemQuantity}
                            </span>
                            <button
                              className="px-2 py-1 bg-[--primary-color] text-white rounded hover:bg-[--secondary-color]"
                              onClick={() => {
                                addToCart(item.id);
                              }}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div>
                          <div className="flex flex-col items-center">
                            <h3 className="lg:text-lg text-base font-bold">
                              Total:
                            </h3>
                            <span className="lg:text-4xl text-3xl text-center font-bold text-[--secondary-color]">
                              ₹{itemTotalPrice}
                            </span>
                          </div>
                          <div className="flex items-center mt-4 space-x-4">
                            <button
                              className="lg:px-4 px-2 lg:py-2 py-1 bg-[--primary-color] text-white rounded hover:bg-[--secondary-color]"
                              onClick={() => {
                                removeAllFromCart(item.id);
                              }}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })
            )}
          </div>

          {isCartEmpty == false ? (
            <div className="md:w-[30vw] w-full p-6 rounded-lg shadow-lg bg-white self-start sticky top-0 right-0">
              <h2 className="text-3xl font-bold mb-6 text-[--primary-color] hover:text-[--secondary-color] relative inline-block group">
                Subtotal
                <span className="block w-0 group-hover:w-full transition-all duration-500 h-1 bg-[--secondary-color] absolute bottom-0 left-0"></span>
              </h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-500">
                  <h3>Subtotal</h3>
                  <h3>₹{getTotalCartAmount()}</h3>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="flex justify-between text-gray-500">
                  <h3>Shipping Fee</h3>
                  <h3>Free</h3>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="flex justify-between font-semibold text-black">
                  <h3>Total</h3>
                  <h3>₹{getTotalCartAmount()}</h3>
                </div>
              </div>

              <button className="mt-6 w-full bg-[--primary-color] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[--secondary-color] shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ">
                Proceed to Checkout
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default CartItem;
