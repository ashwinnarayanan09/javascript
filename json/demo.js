var text = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Anna","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
console.log(obj.employees[1].firstName);

myObj = {"name":"John", "age":30, "car":null};
x = myObj.name;
console.log(x);

x = myObj["name"];
console.log(x);

//Loop through properties

myObj = { "name":"John", "age":30, "car":null };
for (x in myObj) {
  console.log(x);
}

//Loop through values

for (x in myObj) {
  console.log(myObj[x]);
}


//Nested JSON
myObj2 = {
  "name":"John",
  "age":30,
  "cars": {
    "car1":"Ford",
    "car2":"BMW",
    "car3":"Fiat"
  }
 }


 x = myObj2.cars.car2;
 // or:
 x = myObj2.cars["car2"];

 console.log(x);
