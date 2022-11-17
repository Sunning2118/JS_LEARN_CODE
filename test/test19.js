// name 会被提升
console.log(name); // undefined
var name = 'Matt';
// age 不会被提升
// console.log(age); //  Cannot access 'age' before initialization
// let age = 26;
var test_fun = (a) => a
console.log(test_fun(2))
