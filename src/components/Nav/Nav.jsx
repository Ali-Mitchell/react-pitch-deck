import React from 'react';
import "./nav.css";
import logo from './theUnderground-09.svg';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <header className="header">
            <Link  to="/" className="col-4" href="">
                <img alt="" src={logo}></img>
            </Link>
    
            <nav>
                <ul className="col-8">
                <li className="mx-2">
                        <Link  to="/Features">
                            FEATURES
                        </Link>
                    </li>
                    <li className="mx-3">
                        <a href="#features">
                            INVEST
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;