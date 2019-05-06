var x = [1,2,3,4];

var newX1 = x.map( function(n) {
	return n * 2;
  });

var newX2 = x.filter( function(n) {
		return (n % 2 == 0)
  });

var newX3 = x.reduce( function(a, b) {
  return a + b
  });

console.log("newX using map: " + newX1)
console.log("newX using filter: " + newX2)
console.log("newX using reduce: " + newX3)
