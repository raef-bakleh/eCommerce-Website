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
const Checkout = () => {
  const cartCTX = useContext(Context);
  const authCTX = useContext(AuthContext);
  const router = useRouter();
  return (
    <div>
      {cartCTX.cartItems.length > 0 && (
        <div className="cart-wrapper_checkout">
          <div className="cart-container_checkout">
            <div className="product-containerr">
              {cartCTX.cartItems.map((item) => {
                return (
                  <div className="product_checkout" key={item._id}>
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
                              <AiOutlineMinus
                                onClick={() => cartCTX.decrement}
                              />
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
                {console.log(cartCTX.totalPrice)}
              </div>
              <div className="btn-container">
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    if (cartCTX.totalPrice > 0) {
                      cartCTX.setShowCart(false);
                      router.push("/login");
                    } else if (authCTX.isLoggedIn && cartCTX.totalPrice > 0) {
                      router.push("/cart");
                    } else {
                      cartCTX.setShowCart(true);
                    }
                  }}
                >
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {cartCTX.cartItems.length === 0 && (
        <div className="cart-empty">your Cart ist empty!</div>
      )}
    </div>
  );
};

export default Checkout;
