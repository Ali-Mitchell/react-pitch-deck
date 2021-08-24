// import React from 'react';
import React, { useState } from "react";
import "./Invest.css";
import icon from './PWA-logo.png';
import logo5 from './logos-05.png';
import logo6 from './logos-06.png';
import logo7 from './logos-07.png';


function Invest() {


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
                            <h2>Employees</h2>
                            <h1>4</h1>
                        </div>

                        <div className="col-3">
                            <h2>Availability</h2>
                            <h1>IOS/ Android</h1>
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
            <article className="body row ">
                <div className="title col-3">
                    <div className="image"></div>
                    <h2>Description</h2>
                    <h2>Founded</h2>
                    <h2>Industry</h2>
                    <h2>Valuation</h2>
                    <h2>HQ Location</h2>
                    <h2>Employees</h2>
                </div>

                {/* cards ----------------------- */}
                <div className="grey col-3">
                    <div className="image row">
                        <img className="col-5" alt="" src={logo6}></img>
                        <h2 className="col-7">Instagram</h2>
                    </div>
                    <h2>Description</h2>
                    <h2>Founded</h2>
                    <h2>Industry</h2>
                    <h2>Valuation</h2>
                    <h2>HQ Location</h2>
                    <h2>Employees</h2>
                </div>

                <div className="grey col-3">
                    <div className="image row">
                        <img className="col-5" alt="" src={logo7}></img>
                        <h2 className="col-7">Uber</h2>
                    </div>
                    <h2>Description</h2>
                    <h2>Founded</h2>
                    <h2>Industry</h2>
                    <h2>Valuation</h2>
                    <h2>HQ Location</h2>
                    <h2>Employees</h2>
                </div>

                <div className="grey col-3">
                    <div className="image row">
                        <img className="col-5" alt="" src={logo5}></img>
                        <h2 className="col-7">Bands In Town</h2>
                    </div>
                    <h2>Description</h2>
                    <h2>Founded</h2>
                    <h2>Industry</h2>
                    <h2>Valuation</h2>
                    <h2>HQ Location</h2>
                    <h2>Employees</h2>
                </div>
            </article>
            <div className="links row">
                    <div className="col-3"></div>
                    <br></br>
                    <div className="col-3">Link to source</div>
                    <div className="col-3">Link to source</div>
                    <div className="col-3">Link to source</div>
            </div>
            <button>Contact our Team</button>
        </section>
    );
}

export default Invest;