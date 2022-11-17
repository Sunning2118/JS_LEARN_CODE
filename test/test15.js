function foo() {
  var myName = "1"
  bar()
  function bar() {
    console.log(myName)
  }
}
var myName = "2"
foo()  // 1
