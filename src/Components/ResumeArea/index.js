import React from "react";
import Resume from "../../pdfs/Nicolaus_Thomas_Programming_Resume.pdf"

class ResumeArea extends React.Component {

  render(){
    return(
<section class="hero is-dark is-bold is-fullheight has-text-centered">
  <div class="hero-body">
    <div class="container">
      <div>
        <canvas class="hero" id="c" height="100px" width="100px"></canvas>
      </div>
                <h1 id="aboutTitle" class="title resume">
                    Welcome to my Resume
                </h1>
                <a class="homeLink" href="index.html" id="content">Home</a>

         <embed id="resume" src={Resume} type="application/pdf" width="80%" height="700px"></embed>
    </div>
  </div>
</section>
  )}
};

export default ResumeArea