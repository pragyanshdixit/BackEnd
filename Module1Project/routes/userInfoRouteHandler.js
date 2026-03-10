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
        
        const upperHTML=
        `
        <html>
        <head>
        <title>
        Users Info Page
        </title>
        </head>
        <body>
        <h1>
        hi, welcome to our Page
        </h1>
        <div>
        `
        let middleHTML=` `
        const lowerHTML=`
        </div>
        </body>
        </html>
        `
       
        
        const files=fs.readdirSync("./Users");
        console.log(files);
        files.map((file)=>{
            const fileData=fs.readFileSync(`./Users/${file}`,"utf8");
            console.log(fileData);
            middleHTML=middleHTML+` 
            <div style="margin:10px; padding:20px; border:2px solid black;border-radius:5px;width:500px;background-color:gray;">
                <h1>
                    ${fileData.split('&')[0].split('=')[1]}
                </h1>
                <p1>
                    ${fileData.split('&')[1].split('=')[1]} 
                </p1>
            </div>`
        })
        res.write(upperHTML+middleHTML+lowerHTML);
        return res.end();
    })
    
}
export default userInfoRouteHandler; 