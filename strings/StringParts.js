
var str = "Apple, Banana, Kiwi";
var res = str.slice(7,13);
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substring(7,13);
console.log(res);

var str = "Apple, Banana, Kiwi";
var res = str.substr(7,6);
console.log(res);

var str = "Please visit Microsoft";
var txt = str.replace("Microsoft","W3Schools");
console.log(txt);

var str = "Please visit Microsoft & Microsoft";
var txt = str.replace(/Microsoft/g,"W3Schools");
console.log(txt);

var str = "     Hello World!     ";
var res = str.trim();
console.log(res);

var str = "a,b,c,d,e,f";
var arr = str.split(",");
console.log(arr[0]);
