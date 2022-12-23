import React from "react";
import { client } from "../lib/client";
import {
  Product,
  Cart,
  Footer,
  FooterBanner,
  HeroBanner,
  Layout,
  Navbar,
} from "../components";
const Home = ({ products, banner }) => {
  return (
    <>
      <HeroBanner heroBanner={banner.length && banner[0]} />
      {console.log(banner)}
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
