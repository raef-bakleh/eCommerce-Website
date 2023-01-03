import "../styles/globals.css";
import React from "react";
import { Layout } from "../components";
import { CartContext } from "../store/CartContext";
import { Toaster } from "react-hot-toast";
import { UserContext } from "../store/AuthCTX";

export default function App({ Component, pageProps }) {
  return (
    <UserContext>
      <CartContext>
        <Layout>
          <Toaster />
          <Component {...pageProps} />
        </Layout>
      </CartContext>
    </UserContext>
  );
}
