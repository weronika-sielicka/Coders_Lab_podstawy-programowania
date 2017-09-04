
function high(a, b, c){
  if(a > b && a > c){
    return a + " to największa liczba";
  } else if (b >= a && b >= c) {
    return b + " to największa liczba";
  } else if (c >= a && c >= b) {
    return c + " to największa liczba";
  }
}
console.log(high(122, 2044, 212));
