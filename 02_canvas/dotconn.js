// Team jamSandwich: Derek Song & Stefan Tan
// SoftDev2 pd8
// K02 -- Connecting the Dots
// 2019 - 02 - 01

var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var clrbut = document.getElementById("clear");

var clear = function() {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.closePath();
    ctx.beginPath();
}

var dot = function(x, y) {
    ctx.fillStyle = "blue";
    ctx.ellipse(x,y,7,7,0,0,2 * Math.PI);
    //ctx.moveTo(x, y);
    //ctx.lineTo(x, y);
    ctx.stroke();
    //ctx.moveTo(x, y);
}

var draw = function(e) {
    var x = e.offsetX; //The value of the x coordinate relative to the canvas (upper left corner)
    var y = e.offsetY; //The value of the y coordinate relative to the canvas (upper left corner)
	  dot(x,y);
}

clrbut.addEventListener('click', clear);
c.addEventListener('click', draw);
