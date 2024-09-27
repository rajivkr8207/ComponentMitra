import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import Headers from "./Headers";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(true);
  };
  const toggleMenu_leave = () => {
    setIsOpen(false);
  };
  const categorylink = [
    {
      name: "ElectronicComponents",
      Link: "",
    },
    {
      name: "DIY Learning and Robot Kits",
      Link: "",
    },
    {
      name: "Drone Parts",
      Link: "",
    },
    {
      name: "Electric Vehicle Parts",
      Link: "",
    },
    {
      name: "CNC Machine",
      Link: "",
    },
    {
      name: "3D Printer and Parts",
      Link: "",
    },
    {
      name: "Batteries",
      Link: "",
    },
    {
      name: "Chargers",
      Link: "",
    },
    {
      name: "Motors",
      Link: "",
    },
    {
      name: "Motor Drivers",
      Link: "",
    },
    {
      name: "Development Boards",
      Link: "",
    },
    {
      name: "Electronic Components",
      Link: "",
    },
    {
      name: "Display Modules",
      Link: "",
    },
    {
      name: "Sensors & Modules",
      Link: "",
    },
    {
      name: "Cameras",
      Link: "",
    },
    {
      name: "IOT and Wireless",
      Link: "",
    },
    {
      name: "Electronic Modules",
      Link: "",
    },
    {
      name: "Wire and Cables",
      Link: "",
    },
    {
      name: "Mechanical Parts",
      Link: "",
    },

    {
      name: "Tools",
      Link: "",
    },
    {
      name: "PCB’s and Manufacturing",
      Link: "",
    },
    {
      name: "Electronics Projects",
      Link: "",
    },
    {
      name: "Learning Materials",
      Link: "",
    },
    {
      name: "Our video",
      Link: "",
    },
  ];

  const navlinking = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Category",
      link: "",
    },

    {
      name: "Service",
      link: "",
    },
    {
      name: "Simulation",
      link: "",
    },
    {
      name: "Information",
      link: "",
    },
    {
      name: "Learn",
      link: "",
    },
    {
      name: "PCB Manufacturing",
      link: "",
    },
  ];
  return (
    <>
      <Headers />
      <div className="flex justify-between items-center lg:px-5 py-2 bg-white shadow-lg">
        <div className="">
          <button
            onMouseEnter={toggleMenu}
            onMouseLeave={toggleMenu_leave}
            className="bg-[--primary-color] hover:bg-[--secondary-color] text-[#fff] font-bold flex gap-2 items-center px-4 py-2 rounded-full"
          >
            {isOpen ? (
              <IoClose className="text-2xl" />
            ) : (
              <IoMenu className="text-2xl" />
            )}
            <span>All Category</span>
          </button>
          {isOpen && (
            <div
              onMouseEnter={toggleMenu}
              onMouseLeave={toggleMenu_leave}
              className="absolute z-20  lg:left-10 left-2 inline-block bg-white shadow-lg "
            >
              <ul className="flex flex-col gap-4 p-4 text-lg font-medium h-[75vh] overflow-y-scroll scrollbar-thin scrollbar-thumb-[--primary-color] scrollbar-track-gray-100">
                {categorylink.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[--secondary-color] cursor-pointer"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={`lg:flex hidden`}>
          <ul className="flex flex-col lg:flex-row gap-5 text-lg font-medium">
            {navlinking.map((item, i) => {
              return (
                <li
                  key={i}
                  className={`{item.name == 'Category' && 'Service' ? flex gap-1 items-center : null} hover:text-[--secondary-color] cursor-pointer  px-2 py-2 rounded-full`}
                >
                  {item.name}{" "}
                  {item.name == "Category" && "Service" ? (
                    <FaAngleDown />
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
