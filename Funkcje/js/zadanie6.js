var koszt = 0;
var discount = 0;
var totalCost = 0;
function rentCost(days){
if(days === 1){
  console.log("Koszt to 200zł");
} else if (days === 2 || days ===3){
  koszt = 180 * days;
  console.log("Koszt to " + koszt + " zł.");
} else if(days >= 4 && days <= 7){
  koszt = days * 160;
  console.log("koszt to " + koszt + " zł.");
} else if (days >= 8){
  koszt = days * 150;
  console.log("Koszt to " + koszt + " zł.")
}
if (Math.floor(days / 7) >= 1){
  discount = Math.floor(days / 7) * 50;
  console.log("Zniżka wynosi " + discount + " zł.");
} else {
  console.log("Zniżka wynosi 0zł.");
}
totalCost = koszt - discount;
console.log("Całkowity koszt wynosi " + totalCost + " zł.");
}

rentCost(12);
