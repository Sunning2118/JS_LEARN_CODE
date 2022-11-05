var esprima = require("esprima")
var estraverse = require("estraverse")
script = "function eat(){};"
var ast_script = esprima.parseScript(script)
console.log(ast_script)
estraverse.traverse(ast_script, {
    enter: function (node) {
        if (node.type === "Identifier") {  // 某标识符的节点
            console.log(node.name)
        }
    },
})
estraverse.traverse(ast_script, {
    enter: function (node) {
        console.log("enter", node.type)  // 进入某节点
        if (node.type === "Identifier") {
            node.name += "_enter"
        }
    },
    leave: function (node) {
        console.log("leave", node.type)  // 出某节点
        if (node.type === "Identifier") {
            node.name += "_leave"
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