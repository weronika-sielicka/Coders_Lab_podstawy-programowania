var mail = "wmsiel@gmail.com";
var check = mail.indexOf("@");
console.log(check);
if (check == -1) {
  console.log("There is no @ in the address");
} else {
  console.log("There is an @ in the address");
}
