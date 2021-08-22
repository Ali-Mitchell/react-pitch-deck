import React from 'react';
// import coverImage from "../components/Hero/hero-pic-02.svg";
import background from "../components/Hero/neonblur1.jpg";
import "../components/Hero/hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      {/* <Nav></Nav> */}
      <article className="col-5">
        <img alt="" src='https://user-images.githubusercontent.com/79877350/130186891-d4cc2288-cf18-4e6a-9090-e307d27e4978.png' style={{ height: "400px" }}></img>
      </article>

      <article className="text col-7">
          <h1>Big Tag Line</h1>
          <h2>little tag line</h2>
          <div className="interact">
            <button className="button">Survey</button>
            <button className="button">Start Using</button>
          </div>
      </article>

    </section>
  );
}

export default Hero;

// Invest in our company, purchase shares, try the product, corporate listings, 