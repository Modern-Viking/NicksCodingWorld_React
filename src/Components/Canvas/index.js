import React, {useRef, } from "react";

const Canvas = () => {

    const c= useRef();

// useEffect(() => { 
// // Matrix Rain
// let canvas = c.current;
// let ctx = canvas.getContext("2d");


// let j = "私は誰ですか？ああ、それは素晴らしいパズルです。1!2@3#4$5%6^7&8*9(0)";
// j = j.split(""); 
// for (var font_size = 10, columns = canvas.width / font_size, drops = [], x = 0; x < columns; x++){
// drops[x] = 1; setInterval(draw, 33);
// };
// function draw() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
//      ctx.fillRect(0, 0, canvas.width, canvas.height);

//      ctx.beginPath();
//      ctx.font = font_size + "px arial";
//       ctx.fillStyle = "#CC1111";
//     for (let a = 0; a < drops.length; a++) {
//         let b = j[Math.floor(Math.random() * j.length)];
//         ctx.fillText((b, a * font_size, drops[a] * font_size),
//         drops[a] * font_size > canvas.height && Math.random() > .975 && (drops[a] = 0), drops[a]++);
//         console.log(drops[a]);
//     };
//     console.log(drops);
//     debugger;
// }
// });

    return(
        <canvas className="hero is-fullheight" ref={c} id="canvas" width={window.innerWidth} height={window.innerHeight}></canvas>
        )
};

export default Canvas;