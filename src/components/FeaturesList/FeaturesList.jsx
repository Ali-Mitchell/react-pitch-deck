import React, {useState} from 'react';
// import React, { useState } from "react";
import "./Features.css";
// import Nav from '../Nav/Nav';
// import explore from './explore.png';
// import create from './create.png'
// import logo from './theUnderground-09.svg';

function FeaturesList({ Feature }) {

    const [ currentFeature, setCurrentFeature] = useState()
    const [Features] = useState([
        {
            name: 'explore',
            feature: 'explore',
            description: 'text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit provident eaque voluptates obcaecati, explicabo nostrum inventore tenetur eligendi saepe, assumenda temporibus totam illum esse expedita natus cumque consectetur ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit provident eaque voluptates obcaecati, explicabo nostrum inventore tenetur eligendi saepe, assumenda temporibus totam illum esse expedita natus cumque consectetur ullam.'
        },
        {
            name: 'create',
            feature: 'create',
            description: 'text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit provident eaque voluptates obcaecati, explicabo nostrum inventore tenetur eligendi saepe, assumenda temporibus totam illum esse expedita natus cumque consectetur ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit provident eaque voluptates obcaecati, explicabo nostrum inventore tenetur eligendi saepe, assumenda temporibus totam illum esse expedita natus cumque consectetur ullam.'
        },
        {
            name: 'dashboard',
            feature: 'dashboard',
            description: 'text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit provident eaque voluptates obcaecati, explicabo nostrum inventore tenetur eligendi saepe, assumenda temporibus totam illum esse expedita natus cumque consectetur ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora impedit provident eaque voluptates obcaecati, explicabo nostrum inventore tenetur eligendi saepe, assumenda temporibus totam illum esse expedita natus cumque consectetur ullam.'
        }
    ])

    const currentFeature = Features.filter((Feature) => Feature.feature === feature)

    return (
        <section className="feat">
            <article className="mock-up col-5">
                {currentFeature.map((image,i) => (
                  <img key={image,name} alt="" src={require(`../../Assets/${feature}/${i}`)}></img>
                )
                )}
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

export default FeaturesList;