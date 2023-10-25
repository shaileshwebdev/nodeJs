const app = require('./app')
const colors = require('colors')
console.log(app)
console.log(app.x)
console.log(app.y)

const arr = [4,5,7,9,3,2,7,0];
const result = arr.filter((items)=>{
    return items>3;
})
console.log(result)
console.log("this is colors package".green);