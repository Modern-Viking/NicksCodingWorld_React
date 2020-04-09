import React from "react";


class ContactArea extends React.Component {
  render(){
return(
<section className="hero is-medium is-dark is-bold has-text-centered">
  <div className="hero-body">
    <div className="columns">
      <div className="column">
        <h1 id="aboutTitle" className="title">
            Contact Me
        </h1>
            <p>Contact me any way you would like. I will typically respond within a day.</p>  
            <p>If you would like to view my resume please follow this link: </p>
  <br/>
          <a href="/resume">
          <i className="far fa-file-pdf fa-3x"></i>
          </a>
      </div>
    </div>
   <div className="columns">
      <div className="column">
          <a href="https://github.com/Modern-Viking">
            <i className="fab fa-github fa-3x"></i>
          </a>
      </div>
      <div className="column">
          <a href="https://www.instagram.com/modern_viking715/">
            <i className="fab fa-instagram fa-3x"></i>
          </a>
      </div>
      <div className="column">
        <a href="https://www.linkedin.com/in/nicolaus-thomas-7a5692190/">
          <i className="fab fa-linkedin fa-3x"></i>
        </a>
      </div>
      <div className="column">
          <a href="mailto:modernvikingwebpages@gmail.com?subject=Hello%20Nick">
            <i className="far fa-envelope fa-3x"></i>
          </a>
      </div>
    </div>
</div>
</section>
)
}
};

export default ContactArea;