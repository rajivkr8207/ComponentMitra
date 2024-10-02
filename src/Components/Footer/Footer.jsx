import React from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Stay_Connect from "../Stay_Connect/Stay_Connect";

const Footer = () => {
  return (
    <>
      <Stay_Connect />

      <div className="w-full py-10 flex flex-wrap justify-around bg-black text-white">
        <div className="flex flex-col gap-4 w-full md:w-1/3 mb-6 md:mb-0 px-4">
          <div className="flex gap-3 items-center">
            <img
              src={logo}
              alt="Component Mitra Logo"
              className="lg:w-[5rem] w-[4rem]"
            />
            <h1 className="lg:text-2xl text-xl font-bold">Component Mitra</h1>
          </div>
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            quis odit, repellendus quisquam at dignissimos?
          </p>
          <div>
            <h1 className="text-lg font-bold">Follow Us</h1>
            <div className="flex gap-4 my-2">
              <a href="#" className="text-3xl hover:text-gray-300 transition">
                <FaFacebook />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-3xl hover:text-gray-300 transition">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 px-4">
          <h1 className="text-lg font-semibold">
            Active Between:{" "}
            <span className="font-normal">11:00AM to 6:00PM</span>
          </h1>
          <h1 className="text-lg font-semibold">
            Call On: <span className="font-normal">+91 0000000000</span>
          </h1>
          <h1 className="text-lg font-semibold">
            Whatsapp Us: <span className="font-normal">+91 0000000000</span>
          </h1>
          <div className="mt-4">
            <h1 className="text-lg font-bold">Contact Us</h1>
            <p className="text-sm">Componentmitra@gmail.com</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-4">
          <h1 className="text-lg font-bold">Quick Links</h1>
          <ul className="flex flex-col gap-2 mt-2">
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Shopping Cart
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                My Account
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300 transition">
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full text-white bg-black py-3">
        <p className="text-center font-semibold">
          © {new Date().getFullYear()} Component Mitra. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
