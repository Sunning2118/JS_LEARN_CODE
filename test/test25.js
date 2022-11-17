let set = new Set()
// set api
// 1、添加成员
set.add('tom')
set.add('jack') //基本数据类型 不能重复添加
set.add('jack')
set.add([1]) //引用数据类型 地址不同
set.add([1])
console.log(set); //Set(4) { 'tom', 'jack', [ 1 ], [ 1 ] }
set.delete('tom')
console.log(set)  // Set(3) { 'jack', [ 1 ], [ 1 ] }
console.log(set.size); // 3 删了一个所以是3
// 4、set遍历  keys和values 返回值 都是 值没有区别
console.log(set.keys()); // [Set Iterator] { 'jack', [ 1 ], [ 1 ] }
console.log(set.values()); //[Set Iterator] { 'jack', [ 1 ], [ 1 ] }
console.log(set.entries()); //[Set Entries] {[ 'jack', 'jack' ],[ [ 1 ], [ 1 ] ],[ [ 1 ], [ 1 ] ]}

// 4.1 for遍历
for (let k of set.keys()) {
  console.log(k);
}
// jack
// [ 1 ]
// [ 1 ]
// 4.2forEach遍历 
let res = set.forEach((key, value) => {
  console.log(key, value);
});
// jack jack
// [ 1 ] [ 1 ]
// [ 1 ] [ 1 ]

console.log(set.has('jack')); //true
console.log(set.has('hello')); //false
set.clear()
console.log(set); //Set(0) {}