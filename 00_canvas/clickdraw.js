// Derek Song
// SoftDev2 pd8
// K00 -- I See a Red Door
// 2019 - 01 - 30

var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var dot = true;

var clear = function(e) {
  ctx.clearRect(0, 0, c.width, c.height);
};

var rect = function (x, y) {
  ctx.fillRect(x, y, 40, 40)
}

var circ = function (x, y) {
  ctx.fillRect(x, y, 1, 1)
}

document.getElementById("dot").onclick = function() {
  if (dot) {
    dot = false; // rectangles will be drawn
  }
  else {
    dot = true; // dots will be drawn
  }
}

var draw = function (e) {
  if (dot) {
    var x = e.offsetX;
    var y = e.offsetY;
    circ(x, y);
    dot = false;
  }
  else {
    var x = e.offsetX;
    var y = e.offsetY;
    rect(x, y);
    dot = true;
  }
}

var button = document.getElementById("clear");
button.addEventListener('click', function(){clear()});

c.addEventListener('click', function(){draw()});
