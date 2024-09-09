// src/context/CartContext.js
import React, { createContext, useState } from 'react';

// Declaring Context
export const CartContext = createContext();

// CartProvider component wraps the whole application, making the cart state and actions accessible everywhere
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // A function to add products to ones cart
  const addToCart = (product) => {
    console.log('Adding to cart:', product)

    setCartItems((prevItems) => {
    // Checks if the product exists in the cart
      const itemExists = prevItems.find((item) => item.id === product.id);

      // If the product exists it will increase quantity, otherwise add to cart
      const updatedItems = itemExists
      ? prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        : [...prevItems, { ...product, quantity: 1 }];
        // Logging updated items for debug
        console.log('Updated cartItems:', updatedItems)
        return updatedItems;
    });
  };

  // Function to update the quantity of a specific product/item in the cart
const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
        prevItems.map(item =>
            item.id === id ? { ...item, quantity: quantity } : item
        )
    );
};

// Function to remove specific item from the cart
const removeItem = id => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
};

// Calculates total price of all items in the cart by multiplying the price of each product and summing it up
const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

// Provide cartItems, addToCart, updateQuantity, removeItem, and totalPrice to components that use this context
  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeItem,
    totalPrice
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
