import React from 'react';
// import React, { useState } from "react";
import "./Features.css";
import Nav from '../Nav';
import explore from './explore.png';
import create from './create.png'
// import logo from './theUnderground-09.svg';

function Features() {

    return (
        <section className="feat">
            <Nav></Nav>
                    <article className="mock-up col-5">
                        <img alt="" src={explore}></img>
                    </article>
                    <article className="textbox col-7">
                        <div className="col-7">
                            <div className="row">

                                <button className="col-4">EXPLORE</button>
                                <button className="col-4">CREATE</button>
                                <button className="col-4">DASHBOARD</button>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi iste assumenda unde ipsam, molestiae porro sunt voluptatem est aspernatur, quae minima eos aliquid pariatur molestias, beatae ratione ad impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum maiores quidem similique cumque libero? Perspiciatis, rerum laborum. Ratione numquam impedit nisi optio, suscipit ullam, eos sed culpa nesciunt tempore dolorum.</p>
                        </div>
                    </article>
        </section>
            );
}

            export default Features;