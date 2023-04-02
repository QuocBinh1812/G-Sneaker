import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

const ProductTemplate = ({ icon, title, price = null, children }) => {
  const { getTotalPrice } = useContext(MainContext);

  return (
    <div className="shadowCart">
      <div
        before=""
        className="
      before:content-[attr(before)] 
        before:block
        before:absolute
        before:w-[300px]
        before:h-[300px]
        before:rounded-[100%]
        before:bg-yellow
        before:top-[-20%]
        before:left-[-50%]
        before:z-0
      h-[600px] w-[360px] relative box-border rounded-[30px] overflow-hidden py-0 px-[28px] mb-5 flex-col bg-white"
      >
        <div className="logo my-[12px] mx-0 relative">
          <img src={icon} className="w-[50px] block" alt="nike" />
        </div>
        <div className="flex justify-between items-center">
          <div className="text-[24px] font-bold my-[16px] mx-0 relative">
            {title}
          </div>
          {price && (
            <div className="text-[24px] font-bold my-[16px] mx-0 relative">
              ${getTotalPrice()}
            </div>
          )}
        </div>

        {children}
      </div>
    </div>
  );
};

export default ProductTemplate;
