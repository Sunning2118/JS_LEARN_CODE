import * as babel from "babel-core"
output = babel.transform("code();");
console.log(output)