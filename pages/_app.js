import "../styles/globals.css";
import React from "react";
import { Layout } from "../components";
import { CartContext } from "../store/CartContext";
import { Toaster } from "react-hot-toast";
export default function App({ Component, pageProps }) {
  return (
    <CartContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </CartContext>
  );
}
