import React from "react";
import ProductTemplate from "../components/ProductTemplate";
import { importAll } from "../utils/hooks/useGetImage";
import OurProduct from "../components/OurProduct";
import YourCart from "../components/YourCart";
const SneakerSections = () => {
  const myIcon = importAll(
    require.context("../assets", false, /\.(png|jpg|jpe?g|svg)$/)
  );
  return (
    <div className="absolute max-[800px]:flex-col flex  gap-14">
      <ProductTemplate
        icon={myIcon["nike.png"]}
        title="our products"
        children={<OurProduct />}
      />

      <ProductTemplate
        icon={myIcon["nike.png"]}
        title="Your cart"
        children={<YourCart />}
        price="yes"
      />
    </div>
  );
};

export default SneakerSections;
