//Zadania robione z prowadzącym

var numberOfUsers = 11;
var result = numberOfUsers / 2;
console.log(Math.floor(result));

var number = 216
console.log(Math.sqrt(number));

var postcode = "51-112";
var checked = postcode.indexOf("-");
console.log(checked)
if (checked == -1) {
  console.log("Nie ma takiego znaku");
}

//Zadanie robione samodzielnie

var number = 11; //type is number
var string = "Weronika"; //type is string
var boolean = true; //type is boolean
var special = null; //type is special
var array = [11, 07, 1997]; //type is array
var object = { //type is object
  name: "Weronika",
  date: "11.07.1997",
}

var suma1 = number + string;
var suma2 = number + boolean;
var suma3 = array + number;
var suma4 = object + string;

console.log(typeof suma1);
console.log(typeof suma2);
console.log(typeof suma3);
console.log(typeof suma4);


console.log(typeof number);
console.log(typeof string);
console.log(typeof boolean);
console.log(typeof special);
console.log(typeof array);
console.log(typeof object);

console.log(number);
console.log(string);
console.log(boolean);
console.log(special);
console.log(array);
console.log(object);
