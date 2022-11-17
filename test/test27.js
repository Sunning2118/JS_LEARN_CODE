var global = "I am in the global scope";

function scopeOne() {

  var one = "I am in the scope created by `scopeOne()`";
  scopeTwo()
  console.log(global)

  function scopeTwo() {
    var two = "I am in the scope created by `scopeTwo()`";
    console.log(one)
  }
}
scopeOne()