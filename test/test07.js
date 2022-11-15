var scope = "global";
function t() {
  var scope;
  console.log(scope);
  scope = "local"
  console.log(scope);
}
t();