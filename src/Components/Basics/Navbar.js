import React from 'react'
import "./style.css"

const Navbar = () => {
    return (
        <>
            <div className="navigation-content">
                <div className="content">
                    <h4>Yamphu</h4>
                </div>

                <div className="content">
                    <input type="text" placeholder="Search for anything" className="search"></input>
                </div>
                <div className="content">
                    <i className="fas fa-search"></i>
                </div>

                <div className="content">
                    <a href="#" className="signin" id="signin">Sign in</a>
                </div>

                <div className="content">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>

            <div className="sign-content">
                <h3 className="cont">Sign in to continue</h3>
                <p>Sign in or register with your e-mail address</p>
                <h6 className="email">E-mail address</h6>
                <input type="text" name="" className="emailbox"></input>
                <h5 className="continue">Continue</h5>
            </div>

        </>
    )
}

export default Navbar;

