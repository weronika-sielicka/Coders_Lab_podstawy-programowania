function functionName() {

}
/*
for(var i = 0; i < 100; i++) {
  console.log(i);
}

var pet = "unicorn"

for (var i = 0; i < 10; i++) {
  if (pet ==="unicorn") {
    console.log("It's so fluffy!!!");
  } else {
    console.log("Keep dreaming of unicorns");
  }
}

var i = 0;
while (i != 5) {
  console.log("this is a while loop");
  i = Math.floor(Math.random()*10);
  console.log(i);
}
*/

//Zadania z wykładowcą
/*var x = 5;
var silnia = 1;
for(var i = 1; i <= x; i++) {
  silnia *= i;

}
  console.log("Silnia z " + x + ' to ' + silnia + ".");
  */

  //gwiazdki
  /*
console.log("");

var linia = "";
for (var i = 0; i < 5; i++) {
  for (var j = 0; j < 5; j++) {
    if (i === 0 || i === 4 || j === 0; j === 4) {
      console.log("*" + "   " + "*");
    } else {
    linia += "*";
  }

}

console.log("");

//Rozwiązywane
//gwiazdki
var linia = "";
for(var i=0; i<5; i++) {
  for(var j=0; j<5; j++) {
    if(i == 0 || i == 4 || j == 0 || j == 4) {
      linia += "*";
    } else {
      linia += " ";
    }
  }
  console.log(linia);
  linia = "";
}


var linia = "";
for(var i=0; i < 5; i++) {
  for(var j=0; j < 5; j++) {
    if(i !== 0 && i !== 4 && j !== 0 && j !== 4) {
      linia += " ";
    } else {
      linia += "*";
    }
  }
  console.log(linia);
  linia = "";
}

*/

//Zadanie samodzielnie

var number =11;
var given = 0;
for(var i=0; i< number; i++){

  if (number % 2 == 0) {
    console.log( i + " Liczba parzysta");
    console.log(" ");
  } else {
      console.log(i + " Liczba nieparzysta");
      console.log(" ");
  }
}
