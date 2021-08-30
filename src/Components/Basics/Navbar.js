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

            <div className="wrong">
            <i class="far fa-times-circle"></i>
            </div>

            <div className="sign-content">
                <h3 className="cont">Sign in to continue</h3>
                <p>Sign in or register with your e-mail address</p>
                <h6 className="email">E-mail address</h6>
                <input type="text" name="" className="emailbox"></input>
                <h5 className="continue">Continue</h5>
                <a href="#" className="trouble">Trouble signing in?</a>
                <div className="hrcontent">
                    <div className="hr1">
                        <hr></hr>
                    </div>
                    <div className="hr">
                        <h6>OR</h6>
                    </div>
                    <div className="hr2">
                        <hr></hr>
                    </div>
                </div>
                <div className="google-content">
                    <div className="fas fa-google">
                    <i class="fab fa-google"></i>
                    </div>
                    <div className="google">
                        <h5>Continue with Google</h5>
                    </div>
                </div>

                <div className="google-content">
                    <div className="fas fa-google">
                    <i class="fab fa-facebook"></i>
                    </div>
                    <div className="facebook">
                        <h5>Continue with facebook</h5>
                    </div>
                </div>

                <div className="google-content">
                    <div className="fas fa-google">
                    <i class="fab fa-apple"></i>
                    </div>
                    <div className="apple">
                        <h5>Continue with apple</h5>
                    </div>
                </div>
                <h4 className="copyright">yamphuashmina&copy;2021</h4>
            </div>

                


        </>
    )
}

export default Navbar;

