import React from 'react';
import image27 from"../../../img/IMAGE (7).svg";
import image28 from"../../../img/IMAGE (8).svg";
import image29 from"../../../img/IMAGE (9).svg";

const SeventhMainItem = () => {
    return (
        <div className="container6">
            <div className="block">
                <img src={image27} />
                <p className="block-1">Plated Cushion</p>
                <p className="block-2">$ 19.99 USD</p>
            </div>
            <div className="block blocked">
                <img src={image28} />
                <p className="block-1">Silver Cushion</p>
                <p className="block-2">$ 19.99 USD</p>
            </div>
            <div className="block">
                <img src={image29} />
                <p className="block-1">Deep Blue Cushion</p>
                <p className="block-2">$ 19.99 USD</p>
            </div>
        </div>
    );
};

export default SeventhMainItem;