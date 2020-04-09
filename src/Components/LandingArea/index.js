import React from "react";
import Canvas from "../Canvas";
class LandingArea extends React.Component {

  render(){
  return(
<section className="hero is-dark is-bold is-fullheight">
  <Canvas/>
		  <div id="content">
			  <h1>Nicolaus Thomas</h1>
			  <p className="aboutText">I am a Web Dev student eager to start a career in programming</p>
        <p className="aboutText">and I do not share my dessert</p>
      </div>
      <div className="scroll-down" href="#aboutPage"></div>
</section>
  );
  };
}

export default LandingArea;