var esprima = require("esprima")
script = "answer = 42"
moudle = 'import { sqrt } from "math.js"'
// 解析脚本
var ast_script = esprima.parseScript(script)
// 解析模块
var ast_moudle = esprima.parseModule(moudle)
console.log(ast_script)
console.log(ast_moudle)