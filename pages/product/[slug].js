import React, { useContext, useState } from "react";
import Product from "../../components/Product";
import { client, urlFor } from "../../lib/client";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { Context } from "../../store/CartContext";
const ProductDetails = ({ product, products }) => {
  const cartCTX = useContext(Context);

  const { image, name, details, price, qun, slug } = product;
  console.log(slug.current);

  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img src={urlFor(image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {image.map((item, index) => (
              <img
                src={urlFor(item)}
                className={
                  index === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => {
                  setIndex(index);
                }}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>{20}</p>
          </div>
          <h4>Details:</h4>
          <p className="price">€{price}</p>
          <div className="quantity">
            <h3>Quantitiy</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={cartCTX.decrement}>
                <AiOutlineMinus />
              </span>
              <span className="num" onClick="">
                {cartCTX.qun}
              </span>
              <span className="plus" onClick={cartCTX.increment}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => {
                cartCTX.onAddHandler(product, cartCTX.qun);
              }}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>May Also Like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type=="product"]{
    slug{
      current

    }
  }
`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: "",
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};
export const getStaticProps = async ({ params: { slug } }) => {
  if (!slug) return null;

  console.log(slug.current);
  const query = `*[_type=="product" && slug.current=='${slug}'][0]`;
  const productsQuery = '*[_type=="product"]';
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      products,
      product,
    },
  };
};
export default ProductDetails;
