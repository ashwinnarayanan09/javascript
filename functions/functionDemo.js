function myFunction(p1, p2) {
  return p1 * p2;
}

console.log(myFunction(4, 3));

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
}

console.log(toCelsius(77));

//console.log(toCelsius);

//local variables

var tyre = "MRF";

function myCar() {
  var carName = "Volvo";
  console.log(tyre);
  // code here CAN use carName
}
console.log(myCar());
