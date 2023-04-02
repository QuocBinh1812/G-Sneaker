import React, { useContext, useEffect, useState } from "react";
import { MainContext } from "../context/MainContext";
import check from "../assets/check.png";
const ProductItem = ({ key, shoe, i }) => {
  console.log("product day ");
  const { product, handleAddToCart } = useContext(MainContext);
  console.log("product ", product);
  const [added, setAdded] = useState(
    product.find((item) => item.id === shoe.id)
  );
  useEffect(() => {
    console.log("useeeff");
    setAdded(product.find((item) => item.id === shoe.id));
  }, [product]);
  console.log("addd ", !added);
  const handleAddToCartClick = () => {
    handleAddToCart(shoe);
    const checkProduct = product.find((item) => item.id === shoe.id);
    setAdded(checkProduct);
  };
  return (
    <div className={`${i === 0 ? "pt-0 pb-[40px]" : "py-[40px]"} px-0`}>
      <div
        className={`flex items-center overflow-hidden h-[380px] rounded-[30px]`}
        style={{ backgroundColor: `${shoe.color}` }}
      >
        <img
          className="block w-full rotate-[-24deg] ml-[-16px] drop-shadow-[0_30px_20px_rgba(0,0,0,.2)]"
          src={shoe.image}
          alt=""
        />
      </div>
      <div className="text-[20px] font-bold mt-[26px] mx-0 mb-[20px] leading-[1.5]">
        {shoe.name}
      </div>
      <div className="text-[13px] text-gray leading-[1.8] mb-[20px]">
        {shoe.description}
      </div>
      <div className="flex justify-between items-center">
        <div className="text-[18px] font-bold">${shoe.price}</div>
        {!added ? (
          <div
            onClick={() => {
              handleAddToCartClick();
            }}
            className="bg-yellow cart cursor-pointer font-bold text-[14px] box-border  h-[46px] min-w-[46px] py-[16px] px-[20px] rounded-[100px] select-none   flex items-center"
          >
            ADD TO CART
          </div>
        ) : (
          <div className="bg-yellow cart shadow-[-2px_2px_4px_rgba(0,0,0,.15)] w-[46px] h-[46px] cursor-pointer rounded-full flex justify-center items-center select-none">
            <img
              src={check}
              className="w-[20px] h-[20px] cursor-pointer"
              alt="trash"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
