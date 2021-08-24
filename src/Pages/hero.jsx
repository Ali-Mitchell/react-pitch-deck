import React from 'react';
// import coverImage from "../components/Hero/hero-pic-02.svg";
import background from "../components/Hero/neonblur1.jpg";
import "../components/Hero/hero.css";

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      {/* <Nav></Nav> */}
      <article className="col-5">
        <img alt="" src='https://user-images.githubusercontent.com/79877350/130186959-1db6157f-0f87-445f-9dcd-957d0f815ce5.png' style={{ height: "400px" }}></img>
      </article>

      <article className="text col-7">
          <h1>Host your show</h1>
          <h2>explore our map of listings</h2>
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