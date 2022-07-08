const fs=require('fs');
const quote3='Dream is not what you see whwen you are asleep , Dream is smothing that wont let you sleep';
fs.writeFile('./cool.txt',quote3,(err)=>{console.log("Completed Writing")});

fs.readFile("./cool.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

fs.appendFile('./nice.txt',"\n"+quote3,(err)=>{console.log('completed writting')});