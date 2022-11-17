let obj = {
  name: 'zhangsan',
  age: 12
}
//遍历键值对组成的数组
let res = Object.entries(obj)
//将数组作为参数放到Map中

let map = new Map(res)
console.log(map); //Map(2) { 'name' => 'zhangsan', 'age' => 12 }
// 3、给map添加成员
// 引用数据类型 使用变量接收引用数据类型的地址
let temp = {
  name: 'lisi'
}
// 添加以temp为键  hello为值得键值对
map.set(temp, 'hello')
console.log(map);
// 删除成员
// map.delete(temp)
// map.delete('name')
console.log(map);
// 遍历
console.log(map.keys()); //[Map Iterator] { 'name', 'age', { name: 'lisi' } } 键
console.log(map.values()); //[Map Iterator] { 'zhangsan', 12, 'hello' } 值
console.log(map.entries()); // [Map Entries] {[ 'name', 'zhangsan' ],[ 'age', 12 ],[ { name: 'lisi' }, 'hello' ]}
for (let k of map.keys()) {
  console.log(k);
}
// 遍历每个键值对 的键和值
let result = map.forEach((key, value) => {
  console.log(key, value);
});