import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { fetchProductById } from '../services/productService';
import '../styles/ProductPage.css';

const ProductPage = () => {
  // Get the product ID from the URL params
  const { id } = useParams(); 
  
  // Deconstructing addToCart function from context
  const { addToCart } = useContext(CartContext);

  // state to hold fetched product
  const [product, setProduct] = useState(null); 

  // useEffect hook to fetch product data
  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProductById(id);
      setProduct(fetchedProduct);
    };

    getProduct();
  }, [id]);

  // Render loading state if the data isn't available
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <div className="product-details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>Price: {product.price} kr</p>
         {/* Button to add the product to the cart */}
        <button onClick={() => addToCart(product)}>Lägg till i varukorg</button>
      </div>
    </div>
  );
};

export default ProductPage;
