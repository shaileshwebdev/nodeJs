// CRUD operation with file system 
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,"crud");
const filePath = `${dirPath}/hello.txt`;

fs.writeFileSync(filePath,"this is txt file");

// // read the file content 
// fs.readFile(filePath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// update file 
// fs.appendFileSync(filePath," this file is upadted",(err)=>{
//     if(!err) console.log("file is updated")

// });


// rename file
// fs.rename(filePath,`${dirPath}/hey.txt`,(err)=>{
//     if (!err){
//         console.log("file renamed successfully");
//     }

// })

// delete file
fs.unlinkSync(`${dirPath}/hey.txt`)


