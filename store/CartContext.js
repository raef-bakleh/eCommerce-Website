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
  onBuyNowHanlder: () => {},
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
    const ifProduktInCart = cartItems.find((item) => item._id === produkt._id);
    setTotalPrice((prev) => prev + qun * produkt.price);
    setTotalQun((prev) => prev + qun);

    setQun(1);

    if (ifProduktInCart) {
      setCartItems(
        cartItems.map((item) => {
          if (item._id === produkt._id) {
            return {
              ...item,
              qun: item.qun + qun,
            };
          }

          return item;
        })
      );
    } else {
      produkt.qun = qun;
      setCartItems([...cartItems, { ...produkt }]);
    }
    toast.success(`${qun} ${produkt.name} added to the cart.`);
  };
  const onBuyNowHanlder = (product, qun) => {
    product.qun = 1;
    setCartItems([product]);
    setTotalPrice(product.price);
    setQun(1);
    setTotalQun(qun);
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
    onBuyNowHanlder: onBuyNowHanlder,
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
