var linia = "";
for(var i=0; i < 5; i++) {
  for(var j=0; j < 5; j++) {
    var sum = i + j;
    if(sum%2) {
      linia += "  ";
    } else {
      linia += "* ";
    }
  }
  console.log(linia);
  linia = "";
}
