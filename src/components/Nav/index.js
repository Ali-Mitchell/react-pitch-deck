import React from 'react';
import "./nav.css";
import logo from './theUnderground-09.svg';

function Nav() {

    return (
        <header className="header">
            <a className="col-6" href="">
                <img alt="" src={logo} style={{height:"30px"}}></img>
            </a>
    
            <nav>
                <ul className="col-6">
                <li className="mx-2">
                        <a href="#about">
                            ABOUT
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#about">
                            INVEST
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#contact">
                            CONTACT
                        </a>
                    </li>
                    <li className="mx-3">
                        <a href="#proforma">
                            PROFORMA
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;