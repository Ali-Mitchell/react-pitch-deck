import React from 'react';
// import React, { useState } from "react";
import "./Features.css";
// import Nav from '../Nav/Nav';
// import explore from './explore.png';
// import create from './create.png'
// import logo from './theUnderground-09.svg';

function Features({currentFeature}) {

    const {img,text} = currentFeature;

    return (
        <section className="feat">
                    <article className="mock-up col-5">
                        <img alt="" src={currentFeature.img}></img>
                    </article>
                    <article className="textbox col-7">
                        <div className="col-7">
                            <div className="row">

                                <button className="col-4">EXPLORE</button>
                                <button className="col-4">CREATE</button>
                                <button className="col-4">DASHBOARD</button>
                            </div>
                            <p>{currentFeature.img}</p>
                        </div>
                    </article>
        </section>
            );
}

            export default Features;