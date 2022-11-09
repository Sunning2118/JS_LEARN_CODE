// 利用babel-cli进行空编译
var esprima = require("esprima")
script1 = "answer = 42"
script2 = "const fn = a => a;"
moudle = 'import { sqrt } from "math.js"'
// 解析脚本
var ast_script1 = esprima.parseScript(script1)
var ast_script2 = esprima.parseScript(script2)
// 解析模块
var ast_moudle = esprima.parseModule(moudle)
console.log(ast_script1)
console.log(ast_script2)
console.log(ast_moudle)
// 终端中输入<babel learn01.js>