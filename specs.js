// const os=require("os");
// console.log('Free memory',os.freemem()/1024/1024/1024);
// console.log('Total memory',os.totalmem()/1024/1024/1024);
// console.log('Version',os.version());
// console.log('CPUS',os.cpus());


const fs=require('fs');
// const quote='No beauty shines brighter then the one of a good heart';
// fs.writeFile('./awsome.html',quote,(err)=>{
//     console.log(err);
//     console.log('Complete Writing');
// });

const quote2='Live more, worry less😊😊';
fs.writeFile('./backup/.text-1.html',quote2,(err)=>{
    console.log('Complete Writting');
})

const [,,noOfFiles]=process.argv;
for (let i = 1; i <=noOfFiles;i++)
    {
        fs.writeFile(`./backup/.text-${i}.html`,quote2,(err)=>{
            console.log('Complete Writting');
        })
    }
