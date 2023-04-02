import React, { createContext, useEffect, useState } from "react";
export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [product, setProduct] = useState(
    JSON.parse(localStorage.getItem("product")) || []
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    localStorage.setItem("product", JSON.stringify(product));
  }, [product]);
  const handleAddToCart = (shoe) => {
    //const existingItem = product.find((item) => item.id === shoe.id);

    const newItem = { ...shoe, quantity: 1, total: shoe.price };
    const updatedCartItems = [...product, newItem];
    setProduct(updatedCartItems);
  };
  const handleIncreaseQuantity = (productId) => {
    const updatedProduct = product.map((item) => {
      if (item.id === productId) {
        const newQuantity = item.quantity + 1;
        const newTotal = (newQuantity * item.price).toFixed(2);
        return {
          ...item,
          quantity: newQuantity,
          total: newTotal,
        };
      } else {
        return item;
      }
    });
    setProduct(updatedProduct);
  };
  const handleDecreaseQuantity = (id) => {
    const existingItem = product.find((item) => item.id === id);
    if (existingItem && existingItem.quantity > 1) {
      const updatedProduct = product.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity - 1;
          const newTotal = (newQuantity * item.price).toFixed(2);
          return {
            ...item,
            quantity: newQuantity,
            total: newTotal,
          };
        } else {
          return item;
        }
      });

      setProduct(updatedProduct);
    } else {
      const updatedCartItems = [...product.filter((item) => item.id !== id)];
      setProduct(updatedCartItems);
    }
  };
  const removeCart = (id) => {
    const updatedCartItems = [...product.filter((item) => item.id !== id)];
    setProduct(updatedCartItems);
  };
  const getTotalPrice = () => {
    const totalPrice = product.reduce((total, product) => {
      return total + Number(product.total);
    }, 0);

    return totalPrice.toFixed(2);
  };
  return (
    <MainContext.Provider
      value={{
        product,
        setProduct,
        handleAddToCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
        removeCart,
        getTotalPrice,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
