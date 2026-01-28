import  fs from "node:fs";

const userInfoRouteHandler=(req,res)=>{
    const userData=[];
    req.on('data',(chunk)=>{
        userData.push(chunk);
    })
    req.on('end',()=>{
        const parsedUserData=Buffer.concat(userData).toString();
        const filename=parsedUserData.split('&')[0].split('=')[1];
        fs.writeFileSync(`./Users/${filename}.txt`,parsedUserData);
        const files=fs.readdirSync("./Users");
        console.log(files);
        files.map((file)=>{
            const fileData=fs.readFileSync(`./Users/${file}`,"utf8");
            console.log(fileData);
        })
    })
    
}
export default userInfoRouteHandler; 