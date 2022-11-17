// const test_obj = {
//   "name": 'asd',
//   "age": 22,
//   "work": 'coder'
// }
// const test_list = [5, 4, 3, 7];
// for (let item in test_obj) {
//   console.log(item)
// }
// // name
// // age
// // work
// for (let item in test_list) {
//   console.log(item)
// }
// // 0
// // 1
// // 2
// // 3
// for (let item of test_list) {
//   console.log(item)
// }
let test_set = new Set([5, 4, 3, 7]);
console.log(test_set)
const test_map = new Map([['a', 'x'], ['b', 'x'], ['c', 's']])
// const test_map = new Map()
test_map.set(2, 3)
test_map.set(1, 2)
test_map.set(3, 5)
console.log(test_map)
for (var x of test_set) {
  console.log(x);//输出的是Set集合每个元素的值 A　B　C
}
for (var x of test_map) {
  console.log(`x[0]${x[0]},  x[1]${x[1]}`);//输出的是Set集合每个元素的值 A　B　C
}