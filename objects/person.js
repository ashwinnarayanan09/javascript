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
