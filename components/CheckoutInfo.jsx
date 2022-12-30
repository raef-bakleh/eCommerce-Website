import { useRouter } from "next/router";
import React, { useContext } from "react";
import { urlFor } from "../lib/client";
import { Context } from "../store/CartContext";

const CheckoutInfo = () => {
  const cartCTX = useContext(Context);
  const router = useRouter();
  console.log(cartCTX.cartItems);
  const shippingCost = "4.99";
  return (
    <div className="checkoutInfo">
      <div className="checkoutDetail">
        <h1>CHECKOUT</h1>
        <form className="form">
          <p>Billing Details</p>

          <div className="topTwo">
            <input id="name" placeholder="Name" />
            <label htmlFor="name"> name</label>
            <input placeholder="email" />
            <label htmlFor="name"> email</label>
          </div>
          <div className="underOne">
            <input id="phonenumber" placeholder="phonenumber" />{" "}
            <label htmlFor="phonenumber"> phonenumber</label>
          </div>
        </form>
        <form className="form">
          <p>SHIPPING INFO</p>

          <div className="topTwo">
            <input id="address" placeholder="address" />
            <label htmlFor="address"> address</label>
            <input placeholder="PLZ" />
            <label htmlFor="PLZ"> PLZ</label>
          </div>
          <div className="underOne">
            <input id="city" placeholder="city" />{" "}
            <label htmlFor="city"> city</label>
          </div>
        </form>
      </div>

      <div className="summary">
        <h1>SUMMARY</h1>
        <div>
          <div className="itemsCheckout">
            {cartCTX.cartItems.map((items) => {
              return (
                <div className="ordered">
                  <div className="leftOrdered">
                    <img
                      className="checkout-product-image"
                      src={urlFor(items.image[0])}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",
                      }}
                    >
                      <p style={{ color: "black", fontWeight: "700" }}>
                        {items.name}
                      </p>
                      <p style={{ color: "grey" }}>€{items.price}</p>
                    </div>
                  </div>

                  <h5
                    style={{
                      paddingTop: "1%",
                      alignSelf: "center",
                      justifySelf: "flex-end",
                      color: "grey",
                      fontWeight: "700",
                    }}
                  >
                    {items.qun}x
                  </h5>
                </div>
              );
            })}
          </div>
          <table>
            <tr>
              <th> TOTAL</th>
              <th>€{cartCTX.totalPrice.toFixed(2)}</th>
            </tr>
            <tr>
              <th>SHIPPING</th>
              <th>€{shippingCost}</th>
            </tr>
            <tr>
              <th>GRAND TOTAL</th>
              <th>
                {(
                  parseFloat(cartCTX.totalPrice) + parseFloat(shippingCost)
                ).toFixed(2)}
              </th>
            </tr>
          </table>
          <button type="button" >
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
