import React from 'react';
import "./nav.css";
import logo from './theUnderground-09.svg';

function Nav() {

    return (
        <header className="header">
            <a className="col-4" href="">
                <img alt="" src={logo}></img>
            </a>
    
            <nav>
                <ul className="col-8">
                <li className="mx-2">
                        <a href="#features">
                            FEATURES
                        </a>
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