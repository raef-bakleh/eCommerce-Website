import React, { useState } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
const Layout = ({ children, products }) => {
  const [sidebarToggel, setSideBarToggel] = useState();
  const onShowSideBar = (state) => {
    setSideBarToggel(!sidebarToggel);
  };
  return (
    <div className="layout">
      <Sidebar stateChange={{ setSideBarToggel, sidebarToggel }} />

      <Head>
        <title> Raef's Store</title>
      </Head>
      <header>
        <Navbar stateChange={{ setSideBarToggel, sidebarToggel }} />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
