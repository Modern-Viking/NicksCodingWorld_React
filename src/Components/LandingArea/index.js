import React from "react";
class LandingArea extends React.Component {

componentDidMount(){ 
const canvas = this.refs.canvas;
const ctx = this.refs.canvas.getContext("2d");
let j = "私は誰ですか？ああ、それは素晴らしいパズルです。1!2@3#4$5%6^7&8*9(0)";

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle= "#CC1111";
  ctx.font = font_size + "px arial";
  for (var a = 0; a < drops.length; a++) {
      var b = j[Math.floor(Math.random() * j.length)];
      ctx.fillText((b, a * font_size, drops[a] * font_size),
       drops[a] * font_size > canvas.height && Math.random() > .975 && (drops[a] = 0),
        drops[a]++);
  };
};

j = j.split(""); 
for (var font_size = 10, columns = canvas.width / font_size,
   drops = [], x = 0; x < columns; x++)drops[x] = 1;
    setInterval(draw, 33);


};


  render(){
  return(
<section className="hero is-dark is-bold is-fullheight">
  <canvas className="hero is-fullheight" ref="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
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