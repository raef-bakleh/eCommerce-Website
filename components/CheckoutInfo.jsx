import { useRouter } from "next/router";
import React, { useContext } from "react";
import { urlFor } from "../lib/client";
import { Context } from "../store/CartContext";
import { BsBackspace } from "react-icons/bs";

const CheckoutInfo = () => {
  const cartCTX = useContext(Context);
  const router = useRouter();
  const shippingCost = "4.99";
  return (
    <div className="checkoutInfo">
      <div className="goBack">
        <BsBackspace onClick={() => router.push("/checkout")} /> <p>Go Back</p>
      </div>
      <div className="checkoutDetail">
        <h1>CHECKOUT</h1>
        <form className="form">
          <p>Billing Details</p>

          <div className="topTwo">
            <input id="Name" placeholder="Name" />
            <label htmlFor="Name"> Name</label>
            <input placeholder="Email" />
            <label htmlFor="Email"> Email</label>
          </div>
          <div className="underOne">
            <input id="Phonenumber" placeholder="Phonenumber" />
            <label htmlFor="Phonenumber"> Phonenumber</label>
          </div>
        </form>
        <form className="form">
          <p>SHIPPING INFO</p>

          <div className="topTwo">
            <input id="Country" placeholder="Country" />
            <label htmlFor="Country"> Country</label>
            <input placeholder="City" />
            <label htmlFor="City"> City</label>
          </div>
          <div className="middleOne">
            <input
              id="Address"
              placeholder="Address"
              style={{ width: "96%" }}
            />
            <label htmlFor="Address">Address</label>
          </div>
          <div className="underOne">
            <input id="PLZ" placeholder="PLZ" />{" "}
            <label htmlFor="PLZ"> PLZ</label>
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
                      alignSelf: "center",
                      justifyContent: "flex-end",
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
          <div className="orderSummary">
            <div className="totalSummary">
              <h3 style={{ color: "rgb(90, 89, 89)" }}>TOTAL</h3>
              <h3>€{cartCTX.totalPrice.toFixed(2)}</h3>
            </div>
            <div className="totalSummary">
              <h3 style={{ color: "rgb(90, 89, 89)" }}>SHIPPING</h3>
              <h3>€{shippingCost}</h3>
            </div>
            <div className="totalSummary">
              <h3 style={{ color: "rgb(90, 89, 89)" }}>GRAND TOTAL</h3>
              <h3 style={{ color: "rgb(213, 148, 29)" }}>
                €
                {(
                  parseFloat(cartCTX.totalPrice) + parseFloat(shippingCost)
                ).toFixed(2)}
              </h3>
            </div>
          </div>

          <button type="button" className="buttonCheckout">
            CONTINUE & PAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutInfo;
