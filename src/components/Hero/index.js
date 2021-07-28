import React from 'react';
import coverImage from "./hero-pic-02.svg";
import './style.css';

function Hero() {
  return (
    <section id="hero">
      <article>
        <img alt="" src={coverImage} style={{ height: "400px" }}></img>
        <div className="text col-8">
          <h1>Big Tag Line</h1>
          <h2> Little Tag Line</h2>
          <div className="interact">
              <button className="button">Survey</button>
              <button className="button">Start Using</button>
          </div>
        </div>
      </article>


    </section>
  );
}

export default Hero;

// Invest in our company, purchase shares, try the product, corporate listings, 