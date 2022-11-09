var babel_register = require("babel-register");
var learn02 = require("./learn02");
var babel = require("babel-core");
output = babel.transform("code();");
console.log(output);