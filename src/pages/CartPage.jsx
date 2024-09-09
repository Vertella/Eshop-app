import React, { useContext } from "react";
import "../styles/CartPage.css";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

// Page that displays what is inside the users cart
const CartPage = () => {
  // Extracting cartItems and totalPrice from context using useContext hook
  const { cartItems, totalPrice } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        // Displays message if the cart is empty
        <p>Your cart is empty</p>
      ) : (
        <div>
          {/* Render a list of items in the cart */}
          <ul>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </ul>
          {/* Display the total price of the items in the cart */}
          <div className="cart-total">
            <h2> Total: {totalPrice} kr </h2>
          </div>
          {/* Button to proceed with the checkout process */}
          <button className="checkout-button">Check Out</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
