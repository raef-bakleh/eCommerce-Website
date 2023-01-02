import React, { useContext, useEffect, useState } from "react";
import { client } from "../lib/client";
import { Product, FooterBanner, HeroBanner } from "../components";
import Sidebar from "../components/Sidebar";
import AuthContext from "../store/AuthCTX";
const Home = ({ products, banner }) => {
  const authCTX = useContext(AuthContext);
  console.log(authCTX.isLoggedIn);

  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      <div className="products-heading">
        <h2>Best Seller</h2>
        <p>Products many variation</p>
      </div>
      <div className="products-container">
        {products?.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
      <FooterBanner />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  const bannerQuery = '*[_type=="banner"]';
  const banner = await client.fetch(bannerQuery);
  return {
    props: {
      products,
      banner,
    },
  };
};
export default Home;
