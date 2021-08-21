import React from 'react';
// import React, { useState } from "react";
import "./Features.css";
// import Nav from '../Nav/Nav';
import explore from './explore.png';
import create from './create.png'
// import logo from './theUnderground-09.svg';

function Features() {

// condition render with props to the img source and p tag 
// [
//     {
//         img: 'https://user-images.githubusercontent.com/79877350/130186959-1db6157f-0f87-445f-9dcd-957d0f815ce5.png',
//         text: 'Text 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam!',
//     },
//     {
//         img: 'https://user-images.githubusercontent.com/79877350/130186848-8dff402a-b2b7-42f6-b90d-bd1eb5a966de.png',
//         text: 'Text 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam!',
//     },
//     {
//         img: 'https://user-images.githubusercontent.com/79877350/130186891-d4cc2288-cf18-4e6a-9090-e307d27e4978.png',
//         text: 'Text 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui illo possimus cumque officia. Ipsum dolor, voluptas doloribus iste corrupti laboriosam! Cupiditate neque molestias iste et totam nisi facilis vero quisquam!',
//     },
    
// ]

    return (
        <section className="feat">
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