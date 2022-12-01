const { transformFileSync } = require('@babel/core');
const insertParametersPlugin = require("./learn04_consolelog_plugin.js");
const path = require('path');

console.log(__dirname)
const file = path.resolve(__dirname, './learn04_source_code.js');
const { code } = transformFileSync(file, {
  plugins: [insertParametersPlugin],
  parserOpts: {
    sourceType: 'unambiguous',
    plugins: ['jsx']
  }
});

console.log(code);
