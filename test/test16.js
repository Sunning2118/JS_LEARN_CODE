function test() {
  console.log(message)
  var message = "hi"; // 全局变量
}
test();
// console.log(message); // "hi"
