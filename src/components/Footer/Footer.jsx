import React from 'react';
import StickyChat from '../StickyChat/StickyChat';
import "./Footer.css";
import background from './neon-wave2.jpg';


function Footer() {

    return (
       <article className="footer"  style={{ backgroundImage: `url(${background})` }} >
            <StickyChat/>
       </article>
    );
}

export default Footer;