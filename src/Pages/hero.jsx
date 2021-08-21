import React from 'react';
import coverImage from "../components/Hero/hero-pic-02.svg";
import background from "../components/Hero/neonblur1.jpg";
import "../components/Hero/hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})`}}>
      {/* <Nav></Nav> */}
      <article>
        <img alt="" src={coverImage} style={{ height: "400px" }}></img>
        <div className="text col-8">
          <h1>Big Tag Line</h1>
          <h2>little tag line</h2>
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