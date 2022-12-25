import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext, Context } from "../store/CartContext";
import Cart from "./Cart";
const Navbar = () => {
  const cartCTX = useContext(Context);
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Homepage</Link>
      </p>
      <p className="logo">
        <Link href={"/login"}>Login</Link>
      </p>
      <button
        type="button"
        className="cart-icon"
        onClick={() => cartCTX.setShowCart(!cartCTX.showCart)}
      >
        <AiOutlineShopping />
        <span className="cart-item-qty">{cartCTX.totalQun}</span>
      </button>
      {cartCTX.showCart && <Cart />}
    </div>
  );
};

export default Navbar;
