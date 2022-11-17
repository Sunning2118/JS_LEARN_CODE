let set = new Set()
// set api
// 1、添加成员
set.add('tom')
set.add('jack') //基本数据类型 不能重复添加
set.add('jack')
set.add([1]) //引用数据类型 地址不同
set.add([1])
console.log(set); //Set(4) { 'tom', 'jack', [ 1 ], [ 1 ] }