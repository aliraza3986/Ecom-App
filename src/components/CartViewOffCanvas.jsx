import React, { useState, useEffect } from "react";

export default function CartViewOffCanvas({ cartItems }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Initialize the cart with totalPrice based on the initial cartItems array
    const initialCart = cartItems.map((item) => ({
      ...item,
      quantity: 1, // Set an initial quantity for each item
      totalPrice: item.price, // Initialize totalPrice based on price
    }));
    setCart(initialCart);
  }, [cartItems]);

  // Function to increase the quantity and price of a product
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    setCart(updatedCart);
  };

  // Function to decrease the quantity and price of a product
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      updatedCart[index].totalPrice = updatedCart[index].quantity * updatedCart[index].price;
    }
    setCart(updatedCart);
  };

  // Calculate the total price for each item
  const calculateItemTotal = (item) => item.totalPrice;

  // Calculate the overall total price
  const total = cart.reduce((acc, item) => acc + item.totalPrice, 0);

  return (
    <>
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Cart Items
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cart.length ? (
            cart.map((c, index) => (
              <div key={index}>
                <img src={c.image} className="card-img-top" alt="kfc card" style={{width:100}}/>
                <h className="card-title">{c.title}</h>
                <span className="badge text-bg-info">Rs. {c.price}</span>

                <div>
                  <button
                    type="button"
                    id="rad"
                    className="btn btn-primary btn-sm me-2"
                    onClick={() => decreaseQuantity(index)}
                  >
                    -
                  </button>
                  
                  <span className="cons">{c.quantity}</span>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    id="rad"
                    onClick={() => increaseQuantity(index)}
                  >
                    +
                  </button>
                </div>
                <p className="cons">Total: Rs. {calculateItemTotal(c)}</p>
              </div>
            ))
          ) : (
            <p className="cons">Cart is Empty</p>
          )}
          <p className="den " id="total">  <button type="button" class="btn-total">Total:</button> Rs. {total}</p>
        </div>
      </div>
    </>
  );
}
