import express from "express";
import jwt from "jsonwebtoken";

const app =express();

//login routes

app.post("/login",(req,rea)=>{
    const {email,password}=req.body;
    if(email=="admin@gmail.com" && password=="1234"){
        const token=jwt.sign(
            {email:email},
            "secretekey",
            {expiresIn:"1h"}
        );
        res.json({
            message:"Login successful",
            token
        });
    }else{
        res.status(401).json({
            message:"Invalid email or password"
        })
    }
        
})

app.listen(3000,(error)=>{
    if(error) throw new Error(error);
    console.log("Server is running at port : 3000");
})