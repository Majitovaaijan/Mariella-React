import React from 'react';
import image30 from "../../../img/IMAGE (10).svg";
import image31 from "../../../img/IMAGE (11).svg";
import image32 from "../../../img/IMAGE (12).svg";

const EightMainItem = () => {
    return (
        <div className="container7">
            <div className="block">
                <img src={image30} />
                <p className="block-1">Pink Cushion</p>
                <p className="block-2">$ 19.99 USD</p>
            </div>
            <div className="block blocked">
                <img src={image31} />
                <p className="block-1">Black Cushion</p>
                <p className="block-2">$ 19.99 USD</p>
            </div>
            <div className="block">
                <img src={image32} />
                <p className="block-1">Green Cushion</p>
                <p className="block-2">$ 19.99 USD</p>
            </div>
        </div>

    );
};

export default EightMainItem;