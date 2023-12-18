const fs = require('fs');

console.log("First");
fs.readFile("testfile.txt",(err,data)=>console.log(data.toString()));
console.log("Second");