import React from "react";
import "../styles/Footer.css";

// Footer component that provides links to social media platforms.
const Footer = () => {
    return (
        <footer>
            <p> 2024 Online shop. Enjoy.</p>
            <ul>
                {/* Social media links open in a new tab for user convenience */}
                {/* rel="noopener noreferrer" is added for security reasons when using target="_blank" */}
                <li><a href="" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
        </footer>
    )
}

export default Footer;