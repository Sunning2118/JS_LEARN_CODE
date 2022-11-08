const generator = require("@babel/generator");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse");
const types= require("@babel/types");
function compile(code){
    const ast=parser.parse(code)  // 生成抽象语法树
    const visitor = {  // 创建visitor对象
        CallExpression(path){   // ES6特性函数 
            const {callee}=path.node
            // path.node对象中的 callee 数据
            const isConsoleLog=
                types.isMemberExpression(callee)&&  
                // 成员表达式
                callee.object.name==="console"&&
                callee.property.name==="log";

        }
    }
}
const code = `
function getData() {
  console.log("data")
}
`;
const newCode = compile(code)
console.log(newCode)