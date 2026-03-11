import express from "express";
import jwt from "jsonwebtoken";
import authMiddleware from "./middleware/authMiddleware.js";
import upload from "./fileUpload.js";

const app =express();

app.use(express.json());



//file upload route
app.post("/upload",upload.single(`file`),(req,res)=>{
    res.json({
        message:"File uploaded successfully",
        file:req.file
    })
})
//login routes

app.post("/login",(req,res)=>{
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

app.get("/dashboard",authMiddleware,(req,res)=>{
    res.json({
        message: "Welcome to the dashboard",
        user:req.user
    })
})

app.listen(3000,(error)=>{
    if(error) throw new Error(error);
    console.log("Server is running at port : 3000");
})