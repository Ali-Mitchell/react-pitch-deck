import React from 'react';
import "./nav.css";
import logo from './theUnderground-09.svg';
import icon from './hamburger-menu-18.svg'
import headerblur from './headerblur.jpg'
import { Link } from 'react-router-dom';

function Nav() {

    return (




        // Desktop View 
          <header className="header" style={{ backgroundImage: `url(${headerblur})` }}>
            <Link  to="/" className="" href="">
                <img alt="" src={logo}></img>
            </Link>
    
            <nav className="nav">
                <ul className="">
                <li className="mx-2">
                        <Link  to="/Features">
                            FEATURES
                        </Link>
                    </li>
                    <li className="mx-3">
                         <Link  to="/Invest">
                            INVEST
                        </Link>
                    </li>
                    <li className="mx-3">
                        <Link to="/Contact">
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </nav>
            <img alt="menu" src={icon} className="icon"/>
        </header>
    );
}

export default Nav;