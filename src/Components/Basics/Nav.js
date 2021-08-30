import React from 'react'
import "./style.css";

const nav = () => {
    return (
        <>
            <div className="navcontent">
                <div className="jewelery">
                    <a href="#">Jewelwey and Accessories</a>
                </div>

                <div className="clothing">
                    <a href="#">Clothing and Shoes</a>
                </div>

                <div className="Home">
                    <a href="#">Home and Living</a>
                </div>

                <div className="Wedding">
                    <a href="#">Wedding and party</a>
                </div>

                <div className="vintage">
                    <a href="#">Vintage</a>
                </div>

                <div className="arts">
                    <a href="#">Arts</a>
                </div>

                <div className="instruments">
                    <a href="#">Instruments</a>
                </div>
            </div>
        </>
    )
}

export default nav;
