/*

//Zadanie 3
var arr1 = [4, 55, 17, 22, 20];
var  arr2 = [4, 53, 11, 22, 20];
for (i = 0; i < arr1.length; i++) {
  for (j = 0; j < arr2.length; j++){
    if (arr1[i] === arr2[j]){
      var shared = arr1[i];
      console.log(shared);
    }
  }
}


var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 20];

for (var i = 0; i < arr1.length; i++) {
		if(arr2.indexOf(arr1[i]) > -1){
			console.log(arr1[i]);
		}
}
*/
/*
//Zadania z prowadzącym
console.log(" ");

//Powtórki w tablicy
var array = [];
var repeated = 0;
for (i = 0; i < 10; i ++) {
  var random = Math.round(Math.random() * (10 -1) + 1);
  array[i] = random;
  array.sort();

for (var j = i + 1; j < array.length; j++) {
 if (array[i] === array[j]) {
   var repeated = repeated + 1;
    }
}
}
console.log(array);
console.log(repeated);

//Rozwiązanie
var array = [];
var newArray = [];

for (var i = 0; i < 10; i++) {
  array.push(Math.round((9*Math.random()) + 1));
}
console.log(array);

for (var i = 0; i < array.length; i++) {
  for (var j = i+1; j < array.length; j++) {
    if (array[i] == array[j] && newArray.indexOf(array[j]) == -1) {
      newArray.push(array[j]);
    }
  }
}
console.log(newArray);
console.log("Ilosc powtarzajacych sie elementow: " + newArray.length);


console.log(" ");
//Tablica z celowo powtarzanymi liczbami zeby sprawdzic kod
var array = [1, 34, 56, 2, 34, 6, 2, 56];
var repeated = 0;
for (i = 0; i < 10; i ++) {

for (var j = i + 1; j < array.length; j++) {
 if (array[i] === array[j]) {
   var repeated = repeated + 1;
    }
}
}
console.log(repeated); //WORKS
*/
//z usuwaniem przecinka
var string = "My name is Bond, James Bond";
var split = string.replace(",","");
console.log(split);
split = split.split(' ');
console.log(split);
for (i = 0; i < split.length; i++){
  var word = split[i];
  var wordLength = word.length;
  console.log(wordLength);
}

console.log(' ');
//Liczba znaków każdego wyrazu
var string = "Unicorns are AWESOME";
var split = string.split(' ');
console.log(split);
for (i = 0; i < split.length; i++){
  var word = split[i];
  var wordLength = word.length;
  console.log(wordLength);
}
