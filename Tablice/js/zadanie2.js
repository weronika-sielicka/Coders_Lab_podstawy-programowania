var table = [];
for (i = 0; i < 10; i++) {
  var random = Math.round(Math.random() * (60 -1) + 1);
  table[i] = random;
  if (table[i] % 2 != 0) {
    table[i] = table[i] + 1;
  }
}
console.log(table);

//other way
var array = [];
var n = 60;

for (var i = 0; i < 10; i++) {
  a = Math.round(((n - 1) * Math.random()) + 1);
  if (a % 2 > 0) {
    a += 1;
  }
  array.push(a);
}
console.log(array);
