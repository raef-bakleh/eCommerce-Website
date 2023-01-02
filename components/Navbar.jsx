import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { AiFillPropertySafety, AiOutlineShopping } from "react-icons/ai";
import { CartContext, Context } from "../store/CartContext";
import Cart from "./Cart";
import { Cross as Hamburger } from "hamburger-react";

import AuthContext from "../store/AuthCTX";
const Navbar = (props) => {
  const [winSize, setWinSize] = useState({
    height: undefined,
    width: undefined,
  });
  function useWindowSize() {
    useEffect(() => {
      function handleResize() {
        setWinSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return winSize;
  }

  const size = useWindowSize();
  const cartCTX = useContext(Context);
  const authCTX = useContext(AuthContext);
  const signab = () => {
    authCTX.logOut();
    localStorage.setItem("token", "");
  };
  const closeNavbar = () => {
    props.stateChange.setSideBarToggel(!props.stateChange.sidebarToggel);
  };
  return (
    <div className="navbar-container">
      {winSize.width < 800 && (
        <div className="hamburgerOpenClose">
          <Hamburger
            toggled={props.stateChange.sidebarToggel}
            color="white"
            onToggle={closeNavbar}
            direction={"right"}
            duration={0.3}
          />
        </div>
      )}
      <p
        className="logo"
        style={{ marginLeft: winSize.width < 800 ? "-20%" : "0" }}
      >
        <Link href={"/"}>Homepage</Link>
      </p>

      {winSize.width > 800 && (
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
      )}
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
          <AiOutlineShopping size={30} />
          <span className="cart-item-qty">{cartCTX.totalQun}</span>
        </button>
        {cartCTX.showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
