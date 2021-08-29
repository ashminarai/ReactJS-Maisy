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
                    <h4>Sign in</h4>
                </div>

                <div className="content">
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </>
    )
}

export default Navbar;

