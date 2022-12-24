import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const Context = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  totalPrice: 0,
  totalQun: 0,
  qun: 1,
  setQun: () => {},
  increment: () => {},
  decrement: () => {},
  onAddHandler: () => {},
});

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQun, setTotalQun] = useState(0);
  const [qun, setQun] = useState(1);

  const increment = () => {
    setQun((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    setQun((prevQun) => {
      if (prevQun - 1 < 1) return 1;

      return prevQun - 1;
    });
  };
  const onAddHandler = (produkt, qun) => {
    setTotalPrice((prev) => {
      prev + produkt.price * qun;
    });
    setTotalQun((prev) => prev + qun);
    const ifProduktInCart = cartItems.find((item) => item._id === produkt._id);
    if (ifProduktInCart) {
      setCartItems(
        cartItems.map((item) => {
          if (item._id === produkt._id) {
            return {
              ...item,
              qun: item.qun + qun,
            };
            toast.success();
          }
        })
      );
    } else {
      produkt.qun = qun;
      setCartItems([...cartItems, { ...produkt }]);
    }
  };
  const fincalContext = {
    showCart: showCart,
    setShowCart: setShowCart,
    cartItems: cartItems,
    totalPrice: totalPrice,
    totalQun: totalQun,
    qun: qun,
    setQun: setQun,
    increment: increment,
    decrement: decrement,
    onAddHandler: onAddHandler,
  };

  return <Context.Provider value={fincalContext}>{children}</Context.Provider>;
};
