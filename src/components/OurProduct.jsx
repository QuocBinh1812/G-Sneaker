import React from "react";
import ProductItem from "./ProductItem";
import data from "../data/shoes.json";

const OurProduct = () => {
  return (
    <div className="relative h-[470px] overflow-y-scroll scrollbar-hide">
      {data.shoes.map((item, index) => (
        <ProductItem key={item.id} i={index} shoe={item} />
      ))}
    </div>
  );
};

export default OurProduct;
