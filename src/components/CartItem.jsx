// Importing Context
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

// CartItem component shows an item in the user's cart 
// and lets them edit amount or remove it
const CartItem = ({ item }) => {
  // Pulling out updateQuantity and removeitem functions from object returned by the context
  const { updateQuantity, removeItem } = useContext(CartContext);

  return (
    <li className="cart-item">
      <div>
        {/* Displays the product title and quantity/price summary */}
        <h3>{item.title}</h3>
        <p>{item.price} kr x {item.quantity}</p>
      </div>
      <div className="quantity-control">
         {/* Buttons to increase or decrease the quantity of the item */}
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
        {/* Button to remove the item from the cart */}
        <button onClick={() => removeItem(item.id)}>Remove</button>
      </div>
    </li>
  );
};

export default CartItem;
