const dbl=(n)=>n*2;

// console.log('Hello,🤣',dbl(10));
// console.log(process.argv);//argument variable
// console.log(dbl(process.argv[2]));

const[,,num]=process.argv;
console.log(dbl(num));