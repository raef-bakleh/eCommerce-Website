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
  onDeleteHandler: () => {},
  changeCartItemQuantity: () => {},
});

export const CartContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQun, setTotalQun] = useState(0);
  const [qun, setQun] = useState(1);
  console.log(totalPrice);

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
    setTotalPrice((prev) => prev + qun + produkt.price);
    setTotalQun((prev) => prev + qun);
    const ifProduktInCart = cartItems.find((item) => item._id === produkt._id);
    if (ifProduktInCart) {
      setCartItems(
        cartItems.map((item) => {
          toast.success(`${qun} ${item.name} have been added to your cart`);

          if (item._id === produkt._id) {
            return {
              ...item,
              qun: item.qun + qun,
            };
          }
          toast.success(`${item.qun} ${item} have been added to your cart`);
        })
      );
    } else {
      produkt.qun = qun;
      setCartItems([...cartItems, { ...produkt }]);
    }
  };

  const onDeleteHandler = (product, qun) => {
    const restItemsInCart = cartItems.filter((item) => {
      return item._id !== product._id;
    });

    setCartItems(restItemsInCart);
  };

  let foundProdukt;
  let index;

  const changeCartItemQuantity = (id, action) => {
    const cartItemsWithoutTheFoundProduct = cartItems.filter(
      (item) => item._id !== id
    );
    foundProdukt = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((produkt) => produkt._id === id);
    if (action === "increment") {
      setCartItems([
        { ...foundProdukt, qun: (foundProdukt.qun += 1) },
        ...cartItemsWithoutTheFoundProduct,
      ]);
      setTotalPrice((prev) => prev + foundProdukt.price);
      setTotalQun((prev) => prev - 1);
    } else if (action === "decrement") {
      if (foundProdukt.qun > 1) {
        setCartItems([
          ...cartItemsWithoutTheFoundProduct,
          { ...foundProdukt, qun: (foundProdukt.qun -= 1) },
        ]);
        setTotalPrice((prev) => prev - foundProdukt.price);
        setTotalQun((prev) => prev - 1);
      }
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
    onDeleteHandler: onDeleteHandler,
    changeCartItemQuantity: changeCartItemQuantity,
  };

  return <Context.Provider value={fincalContext}>{children}</Context.Provider>;
};
