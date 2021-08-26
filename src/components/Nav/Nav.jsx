import React from 'react';
import "./nav.css";
import logo from './theUnderground-09.svg';
import headerblur from './headerblur.jpg'
import { Link } from 'react-router-dom';

function Nav() {

    return (




        // Desktop View 
          <header className="header" style={{ backgroundImage: `url(${headerblur})` }}>
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
        </header>
    );
}

export default Nav;