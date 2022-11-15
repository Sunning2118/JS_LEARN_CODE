var name = "global";
if (true) {
  var name = "local";
  console.log(name)
}
console.log(name);