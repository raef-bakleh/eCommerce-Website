import React, { createContext, useState } from "react";
import { client } from "../lib/client";

const ItemsContext = createContext({});
export const FetchedProducts = ({ products }) => {
  console.log(products);
  const [fetchedProducts, setProducts] = useState(products);
  return (
    <ItemsContext.Provider value={{ fetchedProducts }}>
      {props.children}
    </ItemsContext.Provider>
  );
};

const getServerSideProps = async () => {
  const query = '*[_type==="product"]';
  const products = await client.fetch(query);
  return {
    props: {
      products,
    },
  };
};
