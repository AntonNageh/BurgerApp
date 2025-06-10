import React, { memo, useState } from "react";
import styling from "../Cart/cartItems.module.css";
import { v4 as uuidv4 } from "uuid";
const CartItems = ({
  name,
  itemIng,
  itemPrice,
  quantity,
  remove,
  id,
  img
}) => {
  return (
    <div className={`${styling.containerDiv} rounded-3xl `}>
      <div className="w-[200px]">
        <img className="w-full rounded-3xl" src={img ? img : "https://as2.ftcdn.net/jpg/03/08/44/33/1000_F_308443353_MEmfG8Jl4VO4FVaXEDY1qoB2Gf3LN26a.jpg"} alt="" />
      </div>
      <div className={`${styling.contentDiv} py-2`}>
        <h1 className={` bungee text-xl ms-5 text-[#ffc400]`}>{name? name : "Your Customized sandwich"}</h1>
        <button onClick={() => remove(id)} className={styling.removeIcon}>
<div className="flex justify-center items-center hover:bg-red-600 hover:text-black text-[#fbfada]  transition-all bg-black size-8 rounded-full">
            <i className="fa-solid fa-xmark "></i>
</div>
        </button>

        <div className={styling.ingWrapper}>
          {itemIng?.map((ing) => {
            return (
              <p key={uuidv4()} className={styling.ingParagraph}>
                {ing["name"]}
              </p>
            );
          })}
        </div>
        <div className={`${styling.quantityPriceWrapper} ms-5 text-[#ffc400] bungee text-lg`}>
          <p
            className="text-[#fbfada]"
          >
            {quantity}x
          </p>
          <div>
            <p className=""> <span className="text-[#fbfada]">{itemPrice}</span> EGP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
