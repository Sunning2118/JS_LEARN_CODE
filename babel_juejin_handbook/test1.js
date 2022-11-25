import template from "@babel/template";
import generate from "@babel/generator";
import * as t from "@babel/types";

// const buildRequire = template.default(`
//   var IMORT_NAME = require(SOURCE);
// `);
// const ast = buildRequire({
//   IMORT_NAME: t.identifier("myModule"),
//   SOURCE: t.stringLiteral("my-module"),
// });
// console.log(generate.default(ast).code);


// const ast = template.default.ast(`
//   var myModule = require("my-module");
// `);
// console.log(ast);


// const source = "my-module";
// const fn = template.default(`
//   var IMPORT_NAME = require('${source}');
// `);
// const ast = fn({
//   IMPORT_NAME: t.identifier("myModule"),  // 要全部大写，有小写则要加%%
// });
// console.log(generate.default(ast).code);

const output = template.default.expression("foo")()
console.log(output)