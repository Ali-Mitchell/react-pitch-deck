// import React from 'react';
import React, { useState } from "react";
import "./Invest.css";
import icon from './PWA-logo.png';


function Invest () {


    return (
        <section className="vest">
                    <article className="header row">

                        <div className="image col-3">
                            <img alt="" src={icon} ></img>
                        </div>

                        <div className="info col-9">
                            <div className="row">
                                <div className="col-3">
                                    <h2>Year started</h2>
                                    <h1>2021</h1>
                                </div>

                                <div className="col-3">
                                    <h2>Year started</h2>
                                    <h1>2021</h1>
                                </div>

                                <div className="col-3">
                                    <h2>Year started</h2>
                                    <h1>2021</h1>
                                </div>
                            </div>

                            <div className="text row">
                                <h1>The Underground Overview</h1>
                                <h2>Description</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore nihil illo recusandae omnis at sit iusto non ipsum autem exercitationem quidem, placeat debitis praesentium vel nisi culpa, tempora aut magnam.r</p>
                                <br></br>
                                <h1>Market Comparables</h1>
                            </div>
                        </div>
                    </article>
                    <article className="row ">
           
                    </article>
        </section>
            );
}

export default Invest;