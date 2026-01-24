import http from'node:http';
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method);
    // res.write("hello request");
    if(req.url=="/"){
        res.write("<html><head><title>Home Page</title></head><body><h1>HELLO THIS IS THE HOME PAGE</h1></body></html>")
        return res.end();
    }
    
    if(req.url=="/about"){
        res.write("<html><head><title>ABOUT Page</title></head><body><h1>HERE YOU CAN SEE ABOUT SECTION</h1></body></html>")
        return res.end();
    }

    if(req.url=="/user"){
        res.write("<html><head><title>User Form</title></head><body><form action='/userInfo' method='POST'><input type='text' placeholder='write your name' name='UserName'/><input type='submit'/></form></body></html>")
        return res.end();
    }
    

    if(req.url=="/userInfo" && req.method=="POST"){
        const data=[];
        req.on('data',(chunk)=>{
            data.push(chunk);
        });
        req.on('end',()=>{
            const parseData=Buffer.concat(data).toString();
            res.write(parseData);
            return res.end();

        });
       
    }

    
});


server.listen(3000);