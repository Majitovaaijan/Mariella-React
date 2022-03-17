import React from 'react';
import mariela from "../../img/mariela.svg";
import pannier from "../../img/pannier.svg";

const Header = () => {
    return (
            <header>
                <div className="mariela">
                    <img src={mariela}/>
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About me</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact me</a></li>
                        <li><img src={pannier}/></li>
                    </ul>
                </nav>
            </header>
    );
};

export default Header;