import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import CartItem from "./CartItem";

const YourCart = () => {
  const { product } = useContext(MainContext);
  return (
    <div className="relative overflow-y-scroll scrollbar-hide h-[470px]">
      {product?.map((item, index) => (
        <CartItem key={item.id} shoe={item} />
      ))}
      {!product.length && (
        <p className="text-[14px] text-black">Your cart is empty</p>
      )}
    </div>
  );
};

export default YourCart;
