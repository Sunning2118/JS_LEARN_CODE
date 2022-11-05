var esprima = require("esprima")
var estraverse = require("estraverse")
var escodegen = require("escodegen")
script = "function eat(){};" // 需要分析的代码
var ast_script = esprima.parseScript(script)   // 生成AST树
// 利用esprima库进行构建AST
estraverse.traverse(ast_script, {
    // 利用estraverse进行遍历
    enter: function (node) {
        console.log("enter", node.type)
        if (node.type === "Identifier") {
            node.name += "_enter" // 进入某节点时
        }
    },
    leave: function (node) {
        console.log("leave", node.type)
        if (node.type === "Identifier") {
            node.name += "_leave" // 出某节点时
        }
    },
})
estraverse.traverse(ast_script, {
    enter: function (node) {
        if (node.type === "Identifier") {  // 某标识符的节点
            console.log(node.name)
        }
    },
})
var script_reback = escodegen.generate(ast_script) 
// 利用escodegen将ASt还原成javascript
console.log(script_reback)
// 输出
// function eat_enter_leave() {
// }