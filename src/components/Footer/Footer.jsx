import React from 'react';
import image36 from "../../img/IMAGE (16).svg"

const Footer = () => {
    return (
        <footer>
            <img src={image36} />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About me</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact me</a></li>
                </ul>
            </nav>
        </footer>

    );
};

export default Footer;