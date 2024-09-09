import React, { useContext } from 'react';
import '../styles/ProductCard.css';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

// ProductCard component that creates the card layout for each item on the page
const ProductCard = ({ product }) => {
  // Deconstructing (pulling out) addToCart function from CartContext to handle adding products to the cart
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      {/* Clicking on a card navigates the user to the product's own page with more information */}
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.price} kr</p>
      </Link>
      {/* Button to add the product directly to cart without navigating away from the current page */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
