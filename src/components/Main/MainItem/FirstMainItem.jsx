import React from 'react';
import IMAGE from "../../../img/IMAGE.svg"
import Rectangle from "../../../img/Rectangle.svg"

const FirstMainItem = () => {
    return (
            <div className="container">
                <div className="first" />
                <div className="second" />
                <img className="pillow" src={IMAGE} />
                <img className="rectangle" src={Rectangle} />
                <p className="new">NEW</p>
                <p className="spring">Spring Cushion <br />Collection 2019</p>
                <a className="buy" href="#">buy now</a>
            </div>
    );
};

export default FirstMainItem;