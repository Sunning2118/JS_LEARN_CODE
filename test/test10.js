var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
  var inVariable = "内层变量";
  function innerFun() { //内层函数
    console.log(inVariable);
  }
  innerFun();
}
console.log(outVariable); //我是最外层变量
outFun(); //内层变量
console.log(inVariable); //inVariable is not defined
innerFun(); //innerFun is not defined
