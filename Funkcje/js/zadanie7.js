function rockPaperScissors(player1, player2){
  if(player1 == "papier" && player2 == "kamien"){
    return "Gracz 1 wygrał";
  } else if (player1 == "papier" && player2 ==      "nozyce") {
    return "Gracz 2 wygrał";
  } else if (player1 == "papier" && player2 == "papier") {
    return "Remis";
  } else if (player1 !== "kamien" && player1 !== "nozyce" && player1 !== "papier") {
    return "Błędne informacje";
  } else if (player1 == "kamien" && player2 == "kamien") {
    return "Remis";
  } else if (player1 == "kamien" && player2 == "nozyce") {
    return "Gracz 1 wygrał";
  } else if (player1 == "kamien" && player2 == "papier") {
    return "Gracz 2 wygrał";
  } else if (player1 == "nozyce" && player2 == "kamien") {
    return "Gracz 2 wygrał";
  } else if (player1 == "nozyce" && player2 == "nozyce") {
    return "Remis";
  } else if (player1 == "nozyce" && player2 == "papier") {
    return "Gracz 1 wygrał";
  } else if (player2 !== "kamien" || player2 !== "nozyce" || player2 !== "papier" || player1 !== "kamien" || player1 !== "nozyce" || player1 !== "papier") {
    return "Błędne informacje";
  }
}
console.log(rockPaperScissors("nozyce", "papier"));
