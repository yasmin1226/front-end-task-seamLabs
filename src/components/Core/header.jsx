import React, { } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (<>


        <header>
            <div className="container">
                <div className="header-content">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <div className="logo">
                        <div className="logo-img">
                            <Link to="/">
                                <i className="far fa-map"></i>
                            </Link>
                        </div>
                        <h2>
                            <Link to="/">
                                <span className="primary-color">E-</span>
                                Shop
                            </Link>
                        </h2>
                    </div>
                    <ul className="menu">
                        <li><a href="#">men</a></li>
                        <li><a href="#">women</a></li>
                        <li><a href="#">children</a></li>
                    </ul>
                    <div className="icons">
                        <div><i className="fas fa-search"></i></div>
                        <div><i className="fas fa-shopping-cart"></i></div>
                        <div><i className="far fa-user"></i></div>
                    </div>
                </div>
            </div>
        </header>
    </>);
}

export default Header;

