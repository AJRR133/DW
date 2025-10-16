//alert("Hello to js");
function $(selector){
    return document.querySelector(selector)
}
/*
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

*/

var ter = new Array (3,5,3,1,5,3,7,8,5,103,35,25,5,67,57,357,573,735,42,46,64,47,57);

/*
for( var i= 0; ter.length> i; i++){
    console.log(ter[i]);
}*/
/*

for (var i = ter.length-1;i>=0;i--){
    console.log(ter[i]);
}
*/
/*
var i = ter.length-1;
for(;i>=0;i--){
    console.log(ter[i])
}*/

/*
ter.forEach(function myFunction(item) {
  console.log(item); 
});
*/
/*
let today = new Date();
let first_oct = new Date(2022,9,1);

console.log(today)
console.log(first_oct)
console.log(today.getDay())

if(today>first_oct){
    console.log("mayor")
} else {
    console.log("menor")
}*/

function funcionbotton(){
    console.log("gracias")
}

function mysecondFuction(){
    console.log("gracias por tu interes")
}

function my3Fuction(mensaje){
    console.log("pesao")
    console.log(mensaje)
}

var div = document.getElementById("my_div");
div.classList.add("my_class");
console.log(div);

var div2 = document.getElementsByTagName("div")
console.log(div2)

var div3 = document.querySelector("#my_2div");
console.log(div3);


console.log($("#my_3div"))
console.log($(".my_class"))
console.log($(".pruebas"))

$("#btn").addEventListener("click",function(){
    var input = document.createElement("input");
    input.setAttribute("type","email")
    input.setAttribute("placeholder","E-mail")
    input.setAttribute("name","emails[]")
    $("#form").appendChild(input)
    myAlert("Add a new email input")
});

function myAlert(msg){
    var div = document.createElement("div");
    div.classList.add("alert")
    div.innerHTML = msg
    var close = document.createElement("span");
    close.style.float="right";
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close)
    $("body").insertBefore(div,$("body").firstChild)
    bind_close();
} 

function bind_close(){
    let elements = document.querySelectorAll(".close");
    for(var i=elements.length-1;i>=0;i--){
        let el = elements[i];
        el.addEventListener("click",function(){
            this.parentNode.style.display="none";

        });
    }
}