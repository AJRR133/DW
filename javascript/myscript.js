alert("Hello to js");

console.log("VIEJO VERDE")

var table = "Normal table"; // var para variables grandes
let chair = "one chair"; // let variables pequeñas

console.log(table);
console.log(chair);

let testBoolean = true;
console.log(testBoolean)

let testNumber =10;
console.log(testNumber)

let testString = 'text';
console.log(testString)

let testBooleanObject = new Boolean(true);
console.log(testBooleanObject)

let testNumberObject = new Number(10);
console.log(testNumberObject)

let testStringObject = new String('text');
console.log(testStringObject)

console.log(testString.toUpperCase)

let concatenar = table+chair;
console.log(concatenar)

let concatenar2 = `hola ${table} ${chair}` 
console.log(concatenar2)

let a = 3;
let inc = ++a;
let dec = --a;
console.log(inc)
console.log(dec)

console.log(typeof(testBoolean))
console.log(typeof(testNumber))
console.log(typeof(testString))


var pri = [];
var sec = new Array(3);
var ter = new Array (3,5);
var cua = new Array (3,5, "Sevilla", true , ter);
console.log(pri);
console.log(sec)
console.log(ter)
console.log(cua)

console.log (ter[1]);
console.log (cua[4] [0]);
console.log (cua[2] [1]);
console.log (cua[3] [1]);

console.log(cua.push("ESPAÑA"))
console.log (cua[5]);

ter[1] = 9
console.log(ter)


console.log(cua)
cua[4][1] = 4;
console.log(cua)