import React, { use, useEffect, useState } from "react";
import styling from "../Cart/Cart.module.css";
import { v4 as uuidv4 } from "uuid";
import CartItems from "../Cart/CartItems";
import Total from "../Cart/Total";
import { div } from "framer-motion/m";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((i) => i["id"] != id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedOrders = localStorage.getItem("orders");
    if (storedCart) {
      if (storedOrders) {
        const parsedOrder = JSON.parse(storedOrders);
        parsedOrder[0]["id"] = uuidv4();
        const newCart = [...JSON.parse(storedCart), ...parsedOrder];
        setCart(newCart);
        localStorage.removeItem("cart");
        localStorage.removeItem("orders");
        localStorage.setItem("cart", JSON.stringify(newCart));
      } else {
        setCart([...JSON.parse(storedCart)]);
      }
    } else {
      if (storedOrders) {
        const parsedOrder = JSON.parse(storedOrders);
        parsedOrder[0]["id"] = uuidv4();
        const cart = [...parsedOrder];
        setCart([...cart]);
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.removeItem("orders");
      }
    }
  }, []);
  const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  return (
    <div className={styling.fluid}>
      <div className="container mx-auto">
        <h1 className={`${styling.header} mt-30 text-center  bungee text-4xl text-[#fbfada]`}>YOUR CART
           <i className="fa-solid fa-cart-shopping text-xl ms-3"></i>
        </h1>
        <div className="flex flex-col ">
        {cart.map((i) => {
          return (
           <div className="rounded-3xl md:w-[50%] w-[80%] mx-auto">
             <CartItems
              id={i["id"]}
              key={i["id"]}
              remove={removeFromCart}
              itemIng={i["ingredients"]}
              quantity={i["quantity"]}
              itemPrice={i["totalPrice"]}
              name={i["name"]}
              img={i["image"]}
            ></CartItems>
           </div>
          );
        })}
        </div>
      </div>
      <Total finalPrice={total}></Total>
    </div>
  );
};

export default Cart;
