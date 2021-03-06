import React, { useState } from 'react';
// import coverImage from "../components/Hero/hero-pic-02.svg";
import background from "../components/Hero/neonblur1.jpg";
import "../components/Hero/hero.css";
import Team from "../components/Team/Team";

function Hero() {
  const [count, setCount] = useState(0);
  console.log(count);


  return (
    <div>
    <section className="hero" style={{ backgroundImage: `url(${background})` }}>
      {/* <Nav></Nav> */}
      <article className="mock-up col-5">
        <img alt="" src='https://user-images.githubusercontent.com/79877350/130186959-1db6157f-0f87-445f-9dcd-957d0f815ce5.png' style={{ height: "400px" }}></img>
      </article>

      <article className="text col-7">
          <h1>Host your show</h1>
          <h2>explore our map of listings</h2>
          <div className="interact">
            <a href="https://www.surveymonkey.com/"className="button">Survey</a>
        
            <button className="button"  onClick={() => setCount(count + 1)}>Start Using</button>
          </div>
      </article>
    </section>
    <Team></Team>
    </div>
    

  );
}

export default Hero;

// Invest in our company, purchase shares, try the product, corporate listings, 
