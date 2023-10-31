const fs = require('fs');
const path = require('path');
// finding path of files where we want create files
const dirPath = path.join(__dirname,'files');


// using for loop to make multiple files in folder
// for(let i = 0; i < 5; i++){
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,"a simple txt file");
// }


// print each file in the files folder
// files is array thats why we apply foreach loop on it
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is:",item);
    })

})