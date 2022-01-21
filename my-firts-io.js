const fs = require("fs");
const text = fs.readFileSync(process.argv[2]);
const textstring = text.toString();
const spliText = textstring.split('\n');
console.log(spliText);