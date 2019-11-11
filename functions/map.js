
var arr = [2, 5, 6, 3, 8, 9];

var newArr = arr.map(function(val, index){
    return {key:index, value:val*val};
})

console.log(newArr);

person = {
  "name":"John",
  "age":30,
  "cars": [
    {"car":"Ford"},
    {"car":"BMW"},
    {"car":"Fiat"},
  ]
 }

var carArr = person.cars.map(function(car){
    return car;
})

console.log(carArr);