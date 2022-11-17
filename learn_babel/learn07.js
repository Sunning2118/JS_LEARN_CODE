const MyVisitor = {
  Identifier() {
    console.log("Called!");
  }
};

// 你也可以先创建一个访问者对象，并在稍后给它添加方法。
let visitor = {};
visitor.MemberExpression = function () { };
visitor.FunctionDeclaration = function () { }
export function test() {
  console.log('asd')
}