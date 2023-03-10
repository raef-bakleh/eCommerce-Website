import { useRouter } from "next/router";
import React from "react";
import { client, urlFor } from "../../lib/client";
const HeadPhones = ({ products }) => {
  const actualProducts = products.filter(
    (item) => item.productType === "HeadPhones"
  );

  const router = useRouter();
  return (
    <div className="pageProduktContainer">
      {actualProducts.map((product) => {
        return (
          <div>
            <div className="product-card-page">
              <img
                src={urlFor(product.image[0])}
                width={250}
                height={250}
                className="product-image"
              />
              <div className="product-details-container">
                <p className="product-name">{product.name}</p>
                <p className="product-price">€{product.price}</p>
              </div>
              <button
                type="button"
                className="product-detail-button"
                onClick={() => router.push(`/product/${product.slug.current}`)}
              >
                See Product
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HeadPhones;

export const getServerSideProps = async ({}) => {
  const query = '*[_type=="product"]';
  const products = await client.fetch(query);
  return {
    props: {
      products,
    },
  };
};
