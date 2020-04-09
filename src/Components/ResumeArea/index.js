import React from "react";
import Resume from "../../pdfs/Nicolaus_Thomas_Programming_Resume.pdf"

class ResumeArea extends React.Component {

  render(){
    return(
<section className="hero is-dark is-bold is-fullheight has-text-centered">
  <div className="hero-body">
    <div className="container">
      <div>
        <canvas className="hero" id="c" height="100px" width="100px"></canvas>
      </div>
                <h1 id="aboutTitle" className="resume">
                    Welcome to my Resume
                </h1>
                <a className="homeLink" href="index.html" id="content">Home</a>

         <embed id="resume" src={Resume} type="application/pdf" width="80%" height="700px"></embed>
    </div>
  </div>
</section>
  )}
};

export default ResumeArea