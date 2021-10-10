import React from 'react';
const Footer = () => {
    return (<>
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="item item-about">
                        <div className="about-container">
                            <div className="logo">
                                <div className="logo-img"><i className="far fa-map"></i></div>
                                <h2>
                                    <span className="primary-color">E-</span>
                                    Shop
                                </h2>
                            </div>
                            <p className="">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Provident accusamus totam voluptatibus officiis
                            </p>
                            <div className="social-media my">
                                <div><i className="fab fa-facebook"></i></div>
                                <div><i className="fab fa-twitter"></i></div>
                                <div><i className="fab fa-twitter"></i></div>
                                <div><i className="fab fa-instagram"></i></div>
                                <div><i className="fab fa-youtube"></i></div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <h3 className="my">shopping online</h3>
                            <ul className="my">
                                <li><a href="#">order status</a></li>
                                <li><a href="#">shipping status</a></li>
                                <li><a href="#">shipping status</a></li>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#">returns</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <h3 className="my">information</h3>
                            <ul className="my">
                                <li><a href="#">order status</a></li>
                                <li><a href="#">shipping status</a></li>
                                <li><a href="#">shipping status</a></li>
                                <li><a href="#">contact us</a></li>
                                <li><a href="#">returns</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-content">
                            <h3 className="my">contact</h3>
                            <ul className="my">
                                <li><a href="#">store@tt.com</a></li>
                                <li>hotline : 011254865</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <div className="rights">
            <p className="light-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
        </div>
    </>

    );
}

export default Footer;