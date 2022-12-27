import React, { useContext, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import { Context } from "../store/CartContext";
import { urlFor } from "../lib/client";
import AuthContext from "../store/AuthCTX";
import { useRouter } from "next/router";
const Cart = () => {
  const cartCTX = useContext(Context);
  const authCTX = useContext(AuthContext);
  const router = useRouter();
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => cartCTX.setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading"> Your cart</span>
          <span className="cart-num-items">
            {cartCTX.cartItems.length} items
          </span>
        </button>

        <div className="product-container">
          {cartCTX.cartItems.map((item) => {
            return (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item.image[0])}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>€{item.price}</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            cartCTX.changeCartItemQuantity(
                              item._id,
                              "decrement"
                            )
                          }
                        >
                          <AiOutlineMinus onClick={() => cartCTX.decrement} />
                        </span>
                        <span className="num">{item.qun}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            cartCTX.changeCartItemQuantity(
                              item._id,
                              "increment"
                            )
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => {
                        cartCTX.onDeleteHandler(item);
                      }}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-bottom">
          <div className="total">
            <h3>TotalAmount</h3>
            <h3>€{cartCTX.totalPrice.toFixed(2)}</h3>
          </div>
          <div className="btn-container">
            <button
              type="button"
              className="btn"
              onClick={() => {
                if (!authCTX.isLoggedIn) {
                  cartCTX.setShowCart(false);
                  router.push("/login");
                } else {
                  router.push("/");
                }
              }}
            >
              Pay With Stripe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
