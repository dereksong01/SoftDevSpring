var c = document.getElementById("slate");
var ctx = c.getContext("2d");
var dot = true;

var clear = function(e) {
  ctx.clearRect(0, 0, 400, 400);
};

var rect = function (e) {
  var x = e.offsetX;
  var y = e.offsetY;
  ctx.fillRect(x, y, 40, 40)
}

var circ = function (e) {
  var x = e.offsetX;
  var y = e.offsetY;
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
    circ(e);
  }
  else {
    rect(e);
  }
}

var button = document.getElementById("clear");
button.addEventListener('click', function(){clear()});

c.addEventListener('click', function(){draw()});
