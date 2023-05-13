import React, { useState, useEffect } from "react";
import CartProduct from "../cartProduct/cartProduct";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [price, setPrice] = useState(0);

  const fetchCartProducts = async (url) => {
    try {
      const result = await fetch(url);
      const items = await result.json();

      const myProducts = [];
      Object.keys(items).forEach((key) =>
        myProducts.push({
          name: key,
          detail: items[key],
        })
      );

      setCartProducts(myProducts);
      setIsloading(false);
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    const url =
      "https://onlineshoppingfrontend-reactjs-default-rtdb.firebaseio.com/cartProducts.json";
    fetchCartProducts(url);
  }, []);

  const removeProduct = (id) => {
    // REMOVING PRODUCT BY FILTERING THEM
    const newProducts = cartProducts.filter((product) => {
      if (product.detail.id == id) {
        return false;
      } else {
        return true;
      }
    });
    setCartProducts(newProducts);
    calculatePrice(newProducts);
  };

  const removeProducts = () => {
    setCartProducts([]);
  };

  const calculatePrice = (products) => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice = totalPrice + product.detail.price * product.detail.quantity;
    });

    setPrice(totalPrice);
  };

  useEffect(() => {
    calculatePrice(cartProducts);
  });

  const productPage = () => {
    navigate("/");
  };

  if (isloading) {
    return (
      <>
        <h1>Loading ...</h1>
      </>
    );
  } else if (cartProducts.length === 0) {
    return (
      <section className="empty-cart">
        <h2>No products in the cart</h2>
        <hr />
      </section>
    );
  } else {
    return (
      <section className="my-cart">
        <section className="cart-products">
          <h2>My Cart ({cartProducts.length})</h2>
          <hr />
          {cartProducts.map((product, index) => {
            return (
              <section key={index}>
                <CartProduct {...product} removeProduct={removeProduct} />
                <hr />
              </section>
            );
          })}
        </section>

        <section className="bill-summary">
          <h4>Order Summary</h4>
          <p>Subtotal: {price}</p>
          <p>Est. Shipping: 500</p>
          <p>Total: {price + 500}</p>
          <button onClick={removeProducts}>Sign in and Checkout</button>
        </section>

        <button className="continue-btn" onClick={productPage}>
          Continue Shopping
        </button>
      </section>
    );
  }
}

export default Cart;
