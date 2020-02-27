import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navigation () {
    return (
        <>
            <nav className="site-navigation text-right text-md-center" role="navigation">
                <div className="container">
                    <ul className="site-menu js-clone-nav d-none d-md-block">
                    <li className="has-children active">
                        <Link to="/">Home</Link>
                        <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                        <li className="has-children">
                            <a href="#">Sub Menu</a>
                            <ul className="dropdown">
                            <li><a href="#">Menu One</a></li>
                            <li><a href="#">Menu Two</a></li>
                            <li><a href="#">Menu Three</a></li>
                            </ul>
                        </li>
                        </ul>
                    </li>
                    <li className="has-children">
                        <a href="about.html">About</a>
                        <ul className="dropdown">
                        <li><a href="#">Menu One</a></li>
                        <li><a href="#">Menu Two</a></li>
                        <li><a href="#">Menu Three</a></li>
                        </ul>
                    </li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><a href="#">Catalogue</a></li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navigation;