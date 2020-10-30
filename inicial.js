let canvas = document.querySelector("#inicial");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "rgba(200, 100, 0, 1)";
ctx.fillRect(200, 100, 50, 300);

ctx.beginPath();
ctx.moveTo(250, 100);
ctx.lineTo(225, 50);
ctx.lineTo(200, 100);
ctx.lineTo(250, 100);
ctx.lineTo(250, 400);
ctx.lineTo(200, 400);
ctx.lineTo(200, 100);
ctx.stroke();


ctx.fillStyle = "rgba(200, 0, 0, 1)";
ctx.beginPath();
ctx.arc(225, 400, 25, 0,Math.PI, false);
ctx.lineTo(200, 400);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.moveTo(218, 65);
ctx.lineTo(232, 65);



ctx.stroke();
