//zadanie 8
function calculateTip(amount, raiting){
  if(raiting == "Bardzo dobra obsluga"){
    return amount*0.25;
  } else if (raiting == "Dobra obsluga") {
    return amount*0.2;
  } else if (raiting == "Srednia obsluga") {
    return amount*0.15;
  } else if (raiting == "Zla obsluga") {
    return amount*0;
  } else if (raiting !== "Bardzo dobra obsluga" && raiting !== "Dobra obsluga" && raiting !== "Srednia obsluga" && raiting !== "Zla obsluga") {
    return "Opis nieczytelny";
  }
}
console.log(calculateTip(100, "Zla obsluga" ));
