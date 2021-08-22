// import React from 'react';
import React, { useState } from "react";
import "./Features.css";
// import Nav from '../Nav/Nav';
import explore from './explore.png';
import create from './create.png'
// import logo from './theUnderground-09.svg';


const features = 
[
    {
        img: 'https://user-images.githubusercontent.com/79877350/130186959-1db6157f-0f87-445f-9dcd-957d0f815ce5.png',
        text: 'Text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam!',
    },
    {
        img: 'https://user-images.githubusercontent.com/79877350/130186848-8dff402a-b2b7-42f6-b90d-bd1eb5a966de.png',
        text: 'Text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam!',
    },
    {
        img: 'https://user-images.githubusercontent.com/79877350/130186891-d4cc2288-cf18-4e6a-9090-e307d27e4978.png',
        text: 'Text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam!',
    },
]


function Features () {


// condition render with props to the img source and p tag 


const [currentFeature, setCurrentFeature] = useState({
    item:0
})


function Explore (){
    setCurrentFeature({item:0});
}

function Create (){
    setCurrentFeature({item:1});
}

function Dashboard (){
    setCurrentFeature({item:2});
}



console.log(currentFeature)

    return (
        <section className="feat">
                    <article className="mock-up col-5">
                        <img alt="" src={features[currentFeature.item].img}></img>
                    </article>
                    <article className="textbox col-7">
                        <div className="col-7">
                            <div className="row">

                                <button onClick={Explore} className="col-4">EXPLORE</button>
                                <button onClick={Create} className="col-4">CREATE</button>
                                <button onClick={Dashboard} className="col-4">DASHBOARD</button>
                            </div>
                            <p>{features[currentFeature.item].text}</p>
                        </div>
                    </article>
        </section>
            );
}

            export default Features;