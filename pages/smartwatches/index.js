import { useRouter } from "next/router";
import React from "react";
import { client, urlFor } from "../../lib/client";
const EarPhones = ({ products }) => {
  const actualProducts = products.filter(
    (item) => item.productType === "SmartWatch"
  );
  const router = useRouter();
  return (
    <div className="pageProduktContainer">
      {actualProducts.map((product) => {
        return (
          <div onClick={() => router.push(`/product/${product.slug.current}`)}>
            <div className="product-card">
              <img
                src={urlFor(product.image[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <p className="product-name">{product.name}</p>
              <p className="product-price">€{product.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EarPhones;

export const getServerSideProps = async ({}) => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  return {
    props: {
      products,
    },
  };
};
