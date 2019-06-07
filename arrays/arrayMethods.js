var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(fruits.toString());

console.log(fruits.join(" * "));

console.log(fruits.pop());

//push
//fruits.push("Kiwi");
//console.log(fruits);

//console.log(fruits.shift());

//splice to add
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//splice to remove elements

fruits.splice(0, 1);
console.log(fruits);


//slice
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1);

console.log(citrus);
