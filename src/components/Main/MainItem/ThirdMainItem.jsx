import React from 'react';
import IMAGE21 from "../../../img/IMAGE (1).svg";
import IMAGE22 from "../../../img/IMAGE (2).svg";
import IMAGE23 from"../../../img/IMAGE (3).svg";

const ThirdMainItem = () => {
    return (
        <div>
            <div className="container2">
                <div className="box">
                    <img src={IMAGE21}  />
                    <div className="more">
                        <p className="about">About me</p>
                        <a className="about-1" href="#">Learn more</a>
                    </div>
                </div>
                <div className="box-1 box">
                    <img src={IMAGE22} />
                    <div className="more">
                        <p className="about">My products</p>
                        <a className="about-1" href="#">Learn more</a>
                    </div>
                </div>
                <div className="box">
                    <img src={IMAGE23} />
                    <div className="more">
                        <p className="about">Contact me</p>
                        <a className="about-1" href="#">Learn more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThirdMainItem;