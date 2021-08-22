import React from 'react';
// import React, { useState } from "react";
// import "./Features.css";
// import Nav from '../Nav/Nav';
import explore from './explore.png';
import { Link } from 'react-router-dom';

// import create from './create.png'
// import logo from './theUnderground-09.svg';

function Explore() {


    return (
        <section className="feat">
                    <article className="mock-up col-5">
                        <img alt="" src={explore}></img>
                    </article>
                    <article className="textbox col-7">
                        <div className="col-7">
                            <div className="row">

                                <Link to="/explore"className="col-4">EXPLORE</Link>
                                <Link to="/create"className="col-4">CREATE</Link>
                                <Link to="/dashboard"className="col-4">DASHBOARD</Link>
                            </div>
                            <p> Explore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur perferendis ipsam molestiae consequuntur suscipit dolores quae recusandae iste sed, quasi, provident iure officiis qui eaque voluptate, expedita eveniet hic?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam aspernatur perferendis ipsam molestiae consequuntur suscipit dolores quae recusandae iste sed, quasi, provident iure officiis qui eaque voluptate, expedita eveniet hic?</p>
                        </div>
                    </article>
        </section>
            );
}

export default Explore;