var person = {
  name: "asd",
  age: 333,
  test01:  // property
    function () {
      console.log("test01")
    },
  test02() {  //method
    console.log("test02")
  },
  test03: function () {
    console.log("test03")
  },
  test04: {
    enter() {
      console.log("test03")
    }
  }

}
console.log(person.name)
person.test01()  // test01
person.test02()  // test02
person.test03()  // test03
// person.test04()  // test04  报错