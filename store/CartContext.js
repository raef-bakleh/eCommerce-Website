import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";

export const Context = createContext({
  showCart: false,
  setShowCart: () => {},
  cartItems: [],
  totalPrice: 0,
  totalQun: 0,
  qun: 0,
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

  const increment = () => {
    setQun((prevQty) => prevQty + 1);
  };

  const decrement = () => {
    setQun((prevQun) => {
      if (prevQun - 1 < 1) return 1;

      return prevQun - 1;
    });
  };
  const onAddHandler = (produkt) => {
    setTotalPrice((prev) => prev + qun * produkt.price);
    setTotalQun((prev) => prev + qun);
    setQun(1);

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

  const onDeleteHandler = (product) => {
    const restItemsInCart = cartItems.filter((item) => {
      return item._id !== product._id;
    });

    setCartItems(restItemsInCart);
    setTotalPrice((prev) => prev - product.qun * product.price);
    setTotalQun((prev) => prev - product.qun);
    setQun(1);
  };

  let foundProdukt;
  let index;

  const changeCartItemQuantity = (id, action) => {
    const allMeals = cartItems;
    const cartItemsWithoutTheFoundProduct = cartItems.filter(
      (item) => item._id !== id
    );
    foundProdukt = cartItems.find((item) => item._id === id);
    if (action === "increment") {
      setCartItems(
        allMeals.map((meal) => {
          if (meal._id === id) {
            return { ...meal, qun: (meal.qun += 1) };
          }
          return meal;
        })
      );

      console.log(cartItems);
      setTotalPrice((prev) => prev + foundProdukt.price);
      setTotalQun((prev) => prev + 1);
    } else if (action === "decrement") {
      if (foundProdukt.qun > 1) {
        setCartItems(
          allMeals.map((meal) => {
            if (meal._id === id) {
              return { ...meal, qun: (meal.qun -= 1) };
            }
            return meal;
          })
        );
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
