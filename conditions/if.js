if (new Date().getHours() < 18) {
  console.log("Good Day");
}


var greeting;
var time = new Date().getHours();
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting);
