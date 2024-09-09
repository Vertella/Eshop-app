import React, { useState, useEffect, useContext} from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

// HomePage component that fetches and displays list of products
const HomePage = () => {
    // State to hold fetched products
    const [products, setProducts] = useState([]);
    // Grabbing addToCart function from CartContext to use for adding items to cart
    const { addToCart } = useContext(CartContext);

    // useEffect hook to fetch products when the component mounts
    useEffect(() => {
        const getProducts = async () => {
            const fetchedProducts = await fetchProducts();
            setProducts(fetchedProducts);
        };

        getProducts();
    }, []);

    return (
        <div className="product-list">
            {/* Mapping over the products array to render ProductCard components */}
            {products.map((product) => (
                // Passing product data and onAddToCart function to each ProductCard component
                <ProductCard key={product.id} product={product} onAddToCart={() => addToCart(product)} />
            ))}
        </div>
    );
};

export default HomePage;