import React, { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";
import trash from "../assets/trash.png";
import { useSpring, animated } from "react-spring";
const CartItem = ({ shoe }) => {
  const { removeCart, handleIncreaseQuantity, handleDecreaseQuantity } =
    useContext(MainContext);
  const [isDeleting, setIsDeleting] = useState(false);
  const AnimatedDiv = animated.div;
  const animationImg = useSpring({
    from: { transform: " scale(0)" },
    to: { transform: " scale(1)" },
  });
  const animationTitle = useSpring({
    from: { transform: "translateX(50%)", opacity: 0 },
    to: { transform: "translateX(0%)", opacity: 1 },
    config: { duration: 400, delay: 5000 },
  });
  const animationOut = useSpring({
    // transform: isDeleting ? "scale(0)" : "scale(1)",
    // opacity: isDeleting ? 0 : 1,
    // config: { duration: 1000 },
  });
  const handleDelete = () => {
    removeCart(shoe.id);
  };
  return (
    <AnimatedDiv style={animationOut} className="flex p-5">
      <div style={{ flex: "0" }}>
        <AnimatedDiv
          className={`w-[90px] h-[90px] mr-[34px] rounded-full`}
          style={{
            backgroundColor: `${shoe.color ? shoe.color : "#fff"}`,
            ...animationImg,
          }}
        >
          <img
            className="block w-[140%] max-w-[100vh] drop-shadow-[0_30px_20px_rgba(0,0,0,.2)]"
            style={{ transform: "rotate(-28deg) translateY(-40px)" }}
            src={`${shoe.image}`}
            alt=""
          />
        </AnimatedDiv>
      </div>
      <div style={{ flex: "1" }}>
        <AnimatedDiv
          style={animationTitle}
          className="font-bold text-[14px] leading-[1.5] mb-[10px]"
        >
          {shoe.name}
        </AnimatedDiv>
        <AnimatedDiv
          style={animationTitle}
          className="text-[20px] font-bold mb-[16px]"
        >{`$${shoe.total}`}</AnimatedDiv>
        <div className="flex items-center justify-center">
          <div
            className="flex items-center justify-start"
            style={{ flex: "1" }}
          >
            <div
              onClick={() => handleDecreaseQuantity(shoe.id)}
              className="cursor-pointer w-[28px] h-[28px] leading-[28px] rounded-full bg-[#eee] text-[16px] font-bold flex items-center justify-center select-none"
            >
              -
            </div>
            <div className="text-[14px] my-0 mx-[8px] w-[20px] text-center">
              {shoe.quantity}
            </div>
            <div
              onClick={() => handleIncreaseQuantity(shoe.id)}
              className="cursor-pointer w-[28px] h-[28px] leading-[28px] rounded-full bg-[#eee] text-[16px] font-bold flex items-center justify-center select-none"
            >
              +
            </div>
          </div>
          <div
            onClick={() => handleDelete()}
            className="bg-yellow shadow-[-2px_2px_4px_rgba(0,0,0,.15)] w-[28px] h-[28px] cursor-pointer rounded-full flex justify-center items-center select-none"
          >
            <img
              src={trash}
              className="w-[16px] h-[16px] cursor-pointer"
              alt="trash"
            />
          </div>
        </div>
      </div>
    </AnimatedDiv>
  );
};

export default CartItem;
