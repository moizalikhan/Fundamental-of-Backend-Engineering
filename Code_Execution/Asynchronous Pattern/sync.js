const fs = require('fs');

console.log("First");
const res = fs.readFileSync("testfile.txt");
console.log(res.toString());
console.log("Second");