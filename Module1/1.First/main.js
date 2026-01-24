import {readFile,writeFile,appendFile, rename,rmdir} from 'node:fs';
readFile('./file.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);

    }
);
writeFile("./newfile.txt","new file is created",(err)=>{
    if(err) throw err;
});

readFile('./newfile.txt','utf-8',(err,data)=>{
    if(err) throw err;
    console.log(data);

    }
);
appendFile("./file.txt","adding text",(err)=>{
    if(err) throw err;
});

rename("./newfile.txt","file2.txt",(err)=>{
    if(err) throw err;
    console.log("success");
});

rmdir("./folder",{recursive:true},(err)=>{
    if(err) throw err;
    console.log("folder deleted");
});

