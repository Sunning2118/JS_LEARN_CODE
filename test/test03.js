function test2() {
    console.log(name);
    name = "test2"
    console.log(name);
}

function test1() {
    name = "test1";
    console.log(name);
}

function test3() {
    console.log(this.name);
    console.log(name);
    var name = "test3"
}
test1();  //test1
test2();  //test1 test2
test3();  //test2  undefined