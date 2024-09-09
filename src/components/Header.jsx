import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Header.css";
import { Link } from "react-router-dom";

// Header component that stays on top of the screen to provide quick and easy navigation of the page
const Header = () => {
    // Deconstructing (pulling out) cartItems from CartContext to access items currently in the cart.
    const { cartItems } = useContext(CartContext);

    // Logging current items in cart for debug purposes.
    console.log(cartItems);

    // Calculates how many items are in the users cart and displays that amount, updates when the user adds/removes items.
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Startpage</Link></li>
                    {/* Displays the number of items in the cart in the navigation link */}
                    <li><Link to="/cart">Cart ({cartItemCount}) </Link></li>

                </ul>
            </nav>
        </header>
    )
}

export default Header;