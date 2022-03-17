import React from 'react';
import image33 from "../../../img/IMAGE (13).svg";
import image34 from "../../../img/IMAGE (14).svg";
import image35 from "../../../img/IMAGE (15).svg";


const NinthMainItem = () => {
    return (
        <div className="container8">
            <div className="box-2">
                <img src={image33} />
                <p className="box-3">Safe shopping</p>
                <p className="box-4">Buy with confidence</p>
            </div>
            <div className="box-2">
                <img src={image34} />
                <p className="box-3">Fast shipping</p>
                <p className="box-4">Get your product fast</p>
            </div>
            <div className="box-2">
                <img src={image35} />
                <p className="box-3">Satisfaction guarantee</p>
                <p className="box-4">Or get your money back</p>
            </div>
        </div>

    );
};

export default NinthMainItem;