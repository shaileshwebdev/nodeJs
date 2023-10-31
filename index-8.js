
// Example of the asynchronous programming

// console.log("start exe..");

// setTimeout(()=>{
//     console.log('loding data');
// },2000);

// console.log("end exe.");

// draw back of the asynchronous programming
let a=10;
let b=0;
setTimeout(()=>{
    b=20;
},2000);
// this is printing a+b=10 but b is updating 
console.log(a+b);

// after update of the value of b a+b become 30
setTimeout(()=>{
    console.log(a+b);
},3000);