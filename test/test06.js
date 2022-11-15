var scope = "global";
function t() {
  console.log(scope);
  var scope = "local"
  console.log(scope);
}
t();