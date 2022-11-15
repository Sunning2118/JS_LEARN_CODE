name = "lwy";
function t() {
  var name = "tlwy";
  function s() {
    var name = "slwy";
    console.log(name);  // slwy
  }
  function ss() {
    console.log(name);  // tlwy
  }
  s();
  ss();
}
t();