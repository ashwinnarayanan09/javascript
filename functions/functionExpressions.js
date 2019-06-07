var x = function (a, b) {return a * b};

console.log(x);

var z = x(4, 3);
console.log(z);

//Hoisting

console.log(myFunction(5));


function myFunction(y) {
  return y * y;
}
