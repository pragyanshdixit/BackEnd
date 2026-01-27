const userInfoRouteHandler=(req,res)=>{
    const userData=[];
    req.on('data',(chunk)=>{
        userData.push(chunk);
    })
    req.on('end',()=>{
        const parsedUserData=Buffer.concat(userData).toString();
        res.write(parsedUserData);
        return res.end();
    })
    
}
export default userInfoRouteHandler;