// Derek Song
// SoftDev2 - pd8
// K03 -- They lock us in the tower whenever we get caught
// 2019 - 02 - 05

var ctx = canvas.getContext("2d");
var requestID;
var radius = 1;
var growing = true;

var init = function(e)
{
	if (requestID != null)
	{
		e.preventDefault();
		console.log("Already animating, this button does NOTHING");
	}
	else
	{
		console.log("Starting animation!");
		requestID = window.requestAnimationFrame(drawDot);
	}
};

var drawDot = function()
{
	if ( radius >= canvas.width / 2 || radius <= 0)
	{
		growing = !growing
	}

	if (growing)
	{
		radius++;
	}
	else
	{
		radius--;
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);

	ctx.fillStyle = "red";
	ctx.beginPath();
	ctx.ellipse(canvas.width / 2, canvas.height / 2, radius, radius, 0, 0, 2 * Math.PI);
	ctx.stroke;
	ctx.fill();

	requestID = window.requestAnimationFrame(drawDot);
};

var stopIt = function(e)
{
	if (requestID == null)
	{
		e.preventDefault();
		console.log("Animation already stopped, this button does nothing!");
	}
	else
	{
		console.log("request ID is " + requestID + ", animation has been STOPPED");
		window.cancelAnimationFrame(requestID);
		requestID = null;
  }
};

document.getElementById('circle').addEventListener('click', init);
document.getElementById('stop').addEventListener('click', stopIt);
