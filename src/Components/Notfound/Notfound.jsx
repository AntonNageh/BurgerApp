import React from "react";
import style from "./Notfound.module.css";
import { useNavigate } from "react-router-dom";


export default function Notfound() {
  let navigate =useNavigate()
  return (
    <div className="h-screen flex justify-center text-center items-center">
      <div>
        <h1 className="text-4xl bungee text-[#ffc400] mb-10">PAGE NOT FOUND!</h1>
        <div className={`${style.background}`}>
          <button onClick={()=>navigate("/")} className={`${style.button} cursor-pointer`}>BACK HOME</button>
        </div>
      </div>
    </div>
  );
}
