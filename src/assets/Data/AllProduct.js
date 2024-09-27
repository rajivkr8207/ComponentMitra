import Rectangle1 from "../category/Rectangle_2.png";
import Rectangle2 from "../category/Rectangle_2.png";
import Rectangle3 from "../category/Rectangle_3.png";
import Rectangle4 from "../category/Rectangle_4.png";
import Rectangle5 from "../category/Rectangle_5.png";
import Rectangle6 from "../category/Rectangle_6.png";
import Rectangle7 from "../category/Rectangle_7.png";
import Rectangle8 from "../category/Rectangle_8.png";
import Rectangle9 from "../category/Rectangle_9.png";
import Rectangle10 from "../category/Rectangle_10.png";
import Rectangle11 from "../category/Rectangle_11.png";
import Rectangle12 from "../category/Rectangle_12.png";
import Rectangle13 from "../category/Rectangle_13.png";
import Rectangle14 from "../category/Rectangle_14.png";
import Rectangle15 from "../category/Rectangle_15.png";
import Rectangle16 from "../category/Rectangle_16.png";
import Rectangle17 from "../category/Rectangle_17.png";
import a from "../category/a.png";
import b from "../category/b.png";
import c from "../category/c.png";
import d from "../category/d.png";
import e from "../category/e.png";
import f from "../category/f.png";
import g from "../category/g.png";
import h from "../category/h.png";
import i from "../category/i.png";
import j from "../category/j.png";
import k from "../category/k.png";
import l from "../category/l.png";

let productdata = [
  {
    id: 1,
    name: "PIC Programmer",
    image: a,
    category: "component board",
    subcategory: "PIC Programmer",
    new_price: 29.99,
    old_price: 39.99,
  },
  {
    id: 2,
    name: "Raspberry Pi",
    image: b,
    category: "component board",
    subcategory: "Raspberry Pi",
    new_price: 49.99,
    old_price: 59.99,
  },
  {
    id: 3,
    name: "Arduino Boards",
    image: c,
    category: "component board",
    subcategory: "Arduino Boards",
    new_price: 19.99,
    old_price: 24.99,
  },
  {
    id: 30,
    name: "Boards",
    image: c,
    category: "component board",
    subcategory: "Arduino Boards",
    new_price: 29.99,
    old_price: 54.99,
  },
  {
    id: 4,
    name: "Compatible With Arduino Boards",
    image: d,
    category: "component board",
    subcategory: "Compatible With Arduino Boards",
    new_price: 22.99,
    old_price: 27.99,
  },
  {
    id: 5,
    name: "Single Board Computer",
    image: e,
    category: "component board",
    subcategory: "Single Board Computer",
    new_price: 69.99,
    old_price: 79.99,
  },
  {
    id: 6,
    name: "Advance Development Boards",
    image: e,
    category: "component board",
    subcategory: "Advance Development Boards",
    new_price: 89.99,
    old_price: 99.99,
  },
  {
    id: 7,
    name: "PIC Development Boards",
    image: f,
    category: "component board",
    subcategory: "PIC Development Boards",
    new_price: 34.99,
    old_price: 44.99,
  },
  {
    id: 8,
    name: "ARM Microcontroller",
    image: g,
    category: "component board",
    subcategory: "ARM Microcontroller",
    new_price: 55.99,
    old_price: 65.99,
  },
  {
    id: 9,
    name: "8051 Development Boards",
    image: i,
    category: "component board",
    subcategory: "8051 Development Boards",
    new_price: 33.99,
    old_price: 43.99,
  },
  {
    id: 10,
    name: "Teensy Boards",
    image: j,
    category: "component board",
    subcategory: "Teensy Boards",
    new_price: 44.99,
    old_price: 54.99,
  },
  {
    id: 11,
    name: "Udoo Boards",
    image: k,
    category: "component board",
    subcategory: "Udoo Boards",
    new_price: 59.99,
    old_price: 69.99,
  },
  {
    id: 12,
    name: "AVR Microcontroller Boards",
    image: l,
    category: "component board",
    subcategory: "AVR Microcontroller Boards",
    new_price: 31.99,
    old_price: 41.99,
  },
  {
    id: 13,
    name: "Module Programmer",
    image: a,
    category: "modules",
    subcategory: "module Programmer",
    new_price: 25.99,
    old_price: 35.99,
  },
  {
    id: 14,
    name: "Module Pi",
    image: b,
    category: "modules",
    subcategory: "module Pi",
    new_price: 45.99,
    old_price: 55.99,
  },
  {
    id: 15,
    name: "Module Boards",
    image: c,
    category: "modules",
    subcategory: "module Boards",
    new_price: 20.99,
    old_price: 30.99,
  },
  {
    id: 16,
    name: "Module With Arduino Boards",
    image: d,
    category: "modules",
    subcategory: "module With Arduino Boards",
    new_price: 23.99,
    old_price: 33.99,
  },
  {
    id: 17,
    name: "Module Board Computer",
    image: e,
    category: "modules",
    subcategory: "module Board Computer",
    new_price: 65.99,
    old_price: 75.99,
  },
  {
    id: 18,
    name: "Module Development Boards",
    image: f,
    category: "modules",
    subcategory: "module Development Boards",
    new_price: 75.99,
    old_price: 85.99,
  },
  {
    id: 19,
    name: "Power Supply Unit",
    image: Rectangle3,
    category: "power supply",
    subcategory: "Power Supply",
    new_price: 99.99,
    old_price: 109.99,
  },
  {
    id: 20,
    name: "Drone Part A",
    image: Rectangle4,
    category: "drone part",
    subcategory: "Drone Part",
    new_price: 199.99,
    old_price: 219.99,
  },
  {
    id: 21,
    name: "Sensor Module X",
    image: Rectangle5,
    category: "sensor module",
    subcategory: "Sensor Module",
    new_price: 59.99,
    old_price: 69.99,
  },
  {
    id: 22,
    name: "3D Printer Part",
    image: Rectangle6,
    category: "3D part",
    subcategory: "3D Part",
    new_price: 120.99,
    old_price: 130.99,
  },
  {
    id: 23,
    name: "Multitool Set",
    image: Rectangle7,
    category: "tools",
    subcategory: "Tool Set",
    new_price: 49.99,
    old_price: 59.99,
  },
  {
    id: 24,
    name: "Electric Vehicle Kit",
    image: Rectangle8,
    category: "electric vehicle part",
    subcategory: "EV Kit",
    new_price: 499.99,
    old_price: 529.99,
  },
  {
    id: 25,
    name: "Robot Kit Pro",
    image: Rectangle9,
    category: "robot kit",
    subcategory: "Robot Kit",
    new_price: 399.99,
    old_price: 429.99,
  },
];

export default productdata;
