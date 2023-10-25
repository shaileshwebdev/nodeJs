const fs = require("fs"); // fs is non global function thats why we need to declare first
console.log("this is example of global and non global module");
fs.writeFileSync("hello.txt","this is my first file system")
console.log("Current Dir",__dirname);
console.log("working file name",__filename);
