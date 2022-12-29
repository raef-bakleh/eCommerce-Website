import React, { useContext } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { CartContext, Context } from "../store/CartContext";
import Cart from "./Cart";
import AuthContext from "../store/AuthCTX";
const Navbar = () => {
  const cartCTX = useContext(Context);
  const authCTX = useContext(AuthContext);
  const signab = () => {
    authCTX.logOut();
    localStorage.setItem("token", "");
  };

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href={"/"}>Homepage</Link>
      </p>
      <div className="pagesLinks">
        <p className="logo">
          <Link href={"/headphones"}>Headphones</Link>
        </p>
        <p className="logo">
          <Link href={"/earphones"}>Earphones</Link>
        </p>
        <p className="logo">
          <Link href={"/smartwatches"}>Smartwatches</Link>
        </p>
        <p className="logo">
          <Link href={"/others"}>Others</Link>
        </p>
      </div>
      <div className="cart-nav">
        {!authCTX.isLoggedIn && (
          <p className="logo">
            <Link href={"/login"}>Login</Link>
          </p>
        )}
        {authCTX.isLoggedIn && (
          <div>
            <p>Hello {authCTX.userName} </p>
          </div>
        )}
        {authCTX.isLoggedIn && (
          <p type="button" className="cart-icon" onClick={signab}>
            signOut
          </p>
        )}
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
    </div>
  );
};

export default Navbar;
