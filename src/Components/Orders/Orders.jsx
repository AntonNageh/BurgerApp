import React from "react";
import style from "./Orders.module.css";
import m1 from "../../assets/m1.jpg";
import m2 from "../../assets/m2.png";
import m3 from "../../assets/m3.jpg";
import m4 from "../../assets/m4.png";
import m5 from "../../assets/m5.png";
import m6 from "../../assets/m6.jpg";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";

const menu = [
  {
    name: "Truffle Blaze Burger",
    image: m1,
    description:
      "Angus beef patty with black truffle aioli, caramelized onions, and aged cheddar on a brioche bun.",
    totalPrice: 320,
    quantity: 1,
  },
  {
    name: "Smoky Inferno Burger",
    image: m2,
    description:
      "Smoked beef patty with ghost pepper cheese, spicy chipotle mayo, jalapeños, and crispy onions.",
    totalPrice: 340,
    quantity: 1,
  },
  {
    name: "Golden Melt Burger",
    image: m3,
    description:
      "Double beef patty with American cheese, gold-dusted bun, and creamy house sauce.",
    totalPrice: 365,
    quantity: 1,
  },
  {
    name: "Green Beast Burger",
    image: m4,
    description:
      "Herb-grilled chicken patty with basil pesto, fresh greens, and mozzarella.",
    totalPrice: 310,
    quantity: 1,
  },
  {
    name: "Firecracker Vegan Burger",
    image: m6,
    description:
      "Spicy vegan patty with crispy lettuce, tomato, sriracha hummus, and pickled onions.",
    totalPrice: 305,
    quantity: 1,
  },
  {
    name: "Double Combo: Blaze + Melt + Green",
    image: m5,
    description:
      "A premium combo of Truffle Blaze, Golden Melt, and Green Beast — perfect for sharing or indulging.",
    totalPrice: 920,
    quantity: 1,
  },
];

const handleOrder = (burger) => {
  const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
  const updatedOrders = [...existingOrders, burger];
  localStorage.setItem("orders", JSON.stringify(updatedOrders));
  toast.success(`${burger.name} added to orders!`);
};

export default function Orders() {
  return (
    <>
      <div className="mt-20 h-screen">
        <Toaster />
        <div className="md:flex-row flex flex-col flex-wrap">
          {menu.map((burger, idx) => (
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                y: { duration: 0.4, delay: idx * 0.1 },
                opacity: { duration: 0.3, delay: idx * 0.2 + 0.3 },
                ease: "easeOut",
              }}
              key={uuidv4()}
              className={`md:w-1/2 w-full h-[400px] flex justify-between items-center text-white bg-cover bg-center bg-no-repeat p-6 ${style.bg}`}
              style={{ backgroundImage: `url(${burger.image}) ` }}
            >
              <div className="w-1/2 mx-4 cursor-pointer hover:scale-[1.1] transition-all">
                <img
                  className="w-[300px] rounded-4xl shadow-2xl transition-all hover:shadow-white/40 shadow-black"
                  src={burger.image}
                  alt={burger.name}
                />
              </div>
              <div className="w-1/2 lexend text-sm ">
                <h1 className="lg:text-3xl text-[#ffc400] text-2xl mb-4 bungee">
                  {burger.name}
                </h1>
                <h1 className="mb-6">{burger.description}</h1>
                <h1>
                  {burger.price} <span className="text-[#ffc400]">EGP</span>
                </h1>

                <button
                  onClick={() => {
                    handleOrder(burger);
                  }}
                  className={`${style.cta} mt-5`}
                >
                  <span className={style.span}>ORDER NOW!</span>
                  <span className={style.second}>
                    <svg
                      width="20px"
                      height="20px"
                      viewBox="0 0 66 43"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none">
                        <path
                          className={style.one}
                          d="M40.15,3.89 L43.97,0.14 C44.17,-0.05 44.48,-0.05 44.68,0.14 L65.69,20.78 C66.08,21.17 66.09,21.80 65.70,22.19 L44.67,42.86 C44.48,43.05 44.17,43.05 43.97,42.86 L40.15,39.10 C39.95,38.91 39.95,38.59 40.15,38.39 L56.99,21.85 C57.19,21.66 57.19,21.34 57.00,21.14 L40.15,4.60 C39.95,4.41 39.95,4.09 40.15,3.89 Z"
                          fill="#FFFFFF"
                        />
                        <path
                          className={style.two}
                          d="M20.15,3.89 L23.97,0.14 C24.17,-0.05 24.48,-0.05 24.68,0.14 L45.69,20.78 C46.08,21.17 46.09,21.80 45.70,22.19 L24.67,42.86 C24.48,43.05 24.17,43.05 23.97,42.86 L20.15,39.10 C19.95,38.91 19.95,38.59 20.15,38.39 L36.99,21.85 C37.19,21.66 37.19,21.34 37.00,21.14 L20.15,4.60 C19.95,4.41 19.95,4.09 20.15,3.89 Z"
                          fill="#FFFFFF"
                        />
                        <path
                          className={style.three}
                          d="M0.15,3.89 L3.97,0.14 C4.17,-0.05 4.48,-0.05 4.68,0.14 L25.69,20.78 C26.08,21.17 26.09,21.80 25.70,22.19 L4.67,42.86 C4.48,43.05 4.17,43.05 3.97,42.86 L0.15,39.10 C-0.04,38.91 -0.04,38.59 0.15,38.39 L16.99,21.85 C17.19,21.66 17.19,21.34 17.00,21.14 L0.15,4.60 C-0.04,4.41 -0.04,4.09 0.15,3.89 Z"
                          fill="#FFFFFF"
                        />
                      </g>
                    </svg>
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
