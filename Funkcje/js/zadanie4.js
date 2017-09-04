function sum(array){
  var total = 0;
  for (i = 0; i < array.length; i ++){
    var total = total + array[i];
  }
  return total;
}

console.log(sum([1, 2, 3]));
