import React from "react";
import MyPhoto from "../../Images/DSCF7279.jpg";

const AboutArea = () =>{
  return (
<section className="hero is-dark is-bold is-fullheight has-text-centered">
  <div className="hero-body">
    <div className="container">
      <h1 id="aboutTitle" className="title">
        About Me
      </h1>
    <div className="columns">
      <div className="column">
        <img src={MyPhoto} alt="Nick Thomas"/>
      </div>

      <div className="column">
        <p className="aboutText">
          I am a Southern California Native being born and Raised in Redlands.  I have always loved Utah and decided to live here after I finished Automotive school.
          I have been an automotive technician for Mercedes Benz for 3 years and have decided it is time to move on in my career.
        </p>
        <p className="aboutText">
          My journey with Web Development is one of passion and determination.  As a child watching Tron and other tech centered films I was amazed by what was possible.  I knew at that time that I wanted to learn the skills to do anything with a computer.
          I have worked hard to keep myself up-to-date with the latest in html, css, and javascript development.
          </p>
          <p className="aboutText">
          In my free time I enjoy hiking, mountain biking, gaming, and managing my personal financial portfolio.
            <q>Only those that can see the invisible, can do the impossible</q>          
          </p>
      </div>
    </div>
  </div>
</div>
</section>
);
};

export default AboutArea