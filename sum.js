const sum=(n1,n2)=>n1+n2;

// console.log(sum(5,10));
// console.log(process.argv);
console.log(sum(+process.argv[2],+process.argv[3]));