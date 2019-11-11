var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.lastName);
console.log(person["lastName"]);

console.log(person.fullName());


var student = {
  greeting : name => console.log('hello:'+name)
};


student.greeting("Ashwin");


///

var parent = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  child:{
  "name":"John",
  "age":30,
  "cars": [
    {"car":"Ford"},
    {"car":"BMW"},
    {"car":"Fiat"},
  ]
 }
};



console.log(parent.child);
console.log(parent.child.cars);

var carArr = parent.child.cars.map(function(car){
    return car;
})

console.log(carArr);